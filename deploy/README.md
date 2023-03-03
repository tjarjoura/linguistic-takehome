Simple Kustomize directory tree for deploying the app to Kubernetes in different environments, including locally.

This is a basic proof-of-concept of running our NestJS server locally in an environment similar to a production Kubernetes cluster. For this scale of an app, it is definitely overkill.

NOTE: It seems Prisma cannot support both SQLite (for developing outside the cluster) and Postgres simultaneously. We need to choose a single DB engine for our schema, because it generates migration files specific to each engine. Therefore this will require some extra work to support the full development flow of generating migration files, which is currently not possible outside of the cluster (and therefore the changes won't be present in the git repository to share with others). There are multiple ways we could support this, but it's not done for now.

To use make sure you have a version of kubectl installed which matches the version of K3s (1.26) defined in local-infra/.env. Then from the root of the repository run: `deploy/start_local.sh`. This will spin up a local Kubernetes cluster (K3s) and a local docker registry, build and push the document-svc image to the local registry, and then deploy it to the local cluster using kubectl. 
