export default async (ctx) => {
    await ctx.store.dispatch('auth/nuxtClientInit', ctx)
    // await ctx.store.dispatch('user/nuxtClientInit', ctx)
}
