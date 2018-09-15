#===============================================================================
# aloha-network-web Development
# This makefile is for use within a local development context.
#===============================================================================
ALOHA_TALK = aloha-talk-web
ALOHA_TALK_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

### Kubernetes Deployment Context
CONTEXT ?= minikube

### Tenant ID
TENTANT_ID ?= staging

BUILD_TAG ?= latest
ALOHA_TALK_IMAGE := $(ALOHA_TALK):$(BUILD_TAG)

build-all:
	[ -d "../matrix-js-sdk" ] || (echo "Cannot find matrix-js-sdk repository" && exit 1)
	[ -d "../matrix-react-sdk" ] || (echo "Cannot find matrix-react-sdk repository" && exit 1)
	cd ../matrix-js-sdk && make build-matrix-js
	cd ../matrix-react-sdk && make build-matrix-react
	make build-talk

build-talk: ## build docker image
	docker build -t $(ALOHA_TALK_IMAGE) $(ALOHA_TALK_DIR) --build-arg tenant=$(TENANT)

build-talk-dev: ## build docker image
	docker build -f Dockerfile-Local -t dev-$(ALOHA_TALK_IMAGE) $(ALOHA_TALK_DIR)

push-talk: ## tag and push to image repository
	docker tag $(ALOHA_TALK_IMAGE) gcr.io/aloha-internal/$(ALOHA_TALK_IMAGE)
	docker push gcr.io/aloha-internal/$(ALOHA_TALK_IMAGE)

clean-talk: ## clean build artifacts
	rm -rf $(ALOHA_TALK_DIR)/node_modules
	rm -rf $(ALOHA_TALK_DIR)/lib
	rm -rf $(ALOHA_TALK_DIR)/webapp
	rm -rf $(ALOHA_TALK_DIR)/electron_app/dist

deploy-talk:
	kubectl --context=$(CONTEXT) \
		apply -f $(ALOHA_TALK_DIR)/devops/contexts/$(CONTEXT)/deployment.yml

undeploy-talk:
	kubectl --context=$(CONTEXT) \
		delete deployment $(ALOHA_TALK)

deploy-talk-dev:
	kubectl --context=$(CONTEXT) \
		apply -f $(ALOHA_TALK_DIR)/devops/contexts/$(CONTEXT)/local-dev-deployment.yml

undeploy-talk-dev:
	kubectl --context=$(CONTEXT) \
		delete deployment $(ALOHA_TALK)-dev
