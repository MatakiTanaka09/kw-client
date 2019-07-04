export default async (ctx) => {
    await ctx.store.dispatch('auth/nuxtClientInit', ctx)
    // await ctx.store.dispatch('event/nuxtClientInit', ctx)
}
