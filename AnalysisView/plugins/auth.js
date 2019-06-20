
export default function ({ app, store, redirect}) {
    if (!app.$auth.loggedIn) {
        redirect('/login');
        return
    }
    const username = app.$auth.user.username
}
