#!/bin/sh

set -e

if [ ! -e ".git" ]; then
	echo "Error: This must be run from the root of the repository"
	exit 1
fi

# Start local K3s cluster and container registry
docker-compose -f deploy/local-infra/docker-compose.yml up -d

# Build + push to local registry
docker build -t localhost:5000/document-svc .
docker push localhost:5000/document-svc

# Deploy server locally
kubectl --kubeconfig=deploy/local-infra/kubeconfig.yaml apply -k deploy/k8s/local 

echo "Run 'kubectl port-forward services/document-svc 3000:80' to open a port to the local server"
echo "Run 'kubectl logs deploy/document-svc -f' to view streaming logs from the local server"
