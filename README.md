# Legacy Healthcare Modernization

## Overview
This project focuses on modernizing a 15-year-old monolithic healthcare management system. The goal is to transform it into a scalable, secure, and cloud-native microservices-based architecture while ensuring HIPAA compliance.

## Key Features
- ✅ Monolith to Microservices (Node.js & Express)
- ✅ Patient, Auth, and Appointment services
- ✅ Dockerized containers for each service
- ✅ Kubernetes-ready deployment
- ✅ HIPAA-compliant infrastructure blueprint
- ✅ Faster release cycle: From weeks to hours

## Folder Structure
```bash
legacy-healthcare-modernization/
├── docs/ # Architecture diagrams, HIPAA compliance docs
│ └── architecture.md
├── services/ # Microservices
│ ├── patient-service/ # Handles patient data
│ ├── auth-service/ # Authentication and RBAC
│ └── appointment-service/ # Booking and scheduling
├── docker/ # Dockerfiles & Compose file
│ ├── Dockerfile.patient-service
│ ├── Dockerfile.auth-service
│ ├── Dockerfile.appointment-service
│ └── docker-compose.yaml
├── k8s/ # Kubernetes manifests
│ ├── patient-deployment.yaml
│ └── patient-service.yaml
├── infra/ # Cloud infra IaC (Terraform/CloudFormation placeholders)
│ └── README.md
└── README.md
```
---

## How to Run
You can run each service independently, or use Docker or Kubernetes for orchestration.


## Local Development

1. Go into a service directory (e.g., `patient-service`)
2. Install dependencies
3. Run the service

```bash
cd services/patient-service
npm install
npm start
```
Services will run on port 3000 by default

Modify PORT in .env or command line as needed

## Run with Docker
Ensure Docker is installed. Then run:

```bash
docker-compose -f docker/docker-compose.yaml up --build
```

This will:

Build all three services from their respective Dockerfiles.

Expose ports:

 1.Patient Service → 3001

 2.Auth Service → 3002

 3.Appointment Service → 3003

Test via browser or curl:

```bash
curl http://localhost:3001
```
---

## Deploy to Kubernetes
1.Push Docker images to your registry (e.g., Docker Hub or ECR)

2.Update image references in k8s/*.yaml

3.Apply configs:
```bash
kubectl apply -f k8s/
```
4.Expose service (e.g., LoadBalancer or Ingress)

Monitor with:

kubectl get pods
kubectl logs <pod-name>

---

