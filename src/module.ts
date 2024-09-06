import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@mrudling/ui-components',
    configKey: 'uiComponents',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    
    await addComponentsDir({
      path: resolver.resolve("./runtime/components"), // path of components
      pathPrefix: false, // Prefix component name by its path.
      prefix: "", // Prefix all matched components.
      global: false, // Registers components to be globally available.
    })
  },
})
