import { iInfrastructure } from "@/infrastructure";

declare module "vue/types/vue" {
  interface Vue {
    $infra: iInfrastructure;
  }
}
