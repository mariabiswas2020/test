resource "google_artifact_registry_repository" "ar_auth" {
  location      = "europe-west1"
  repository_id = "auth"
  project       = module.host_project_artifacts.project_id
  description   = "Container image repository for auth"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
