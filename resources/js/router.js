import Vue from "vue";

import VueRouter from "vue-router";

import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import PostsIndex from "./pages/PostsIndex";
import PostsShow from "./pages/PostsShow";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: Home },
        {
            path: "/posts",
            name: "posts-index",
            component: PostsIndex,
        },
        {
            path: "/posts/:slug",
            name: "posts-show",
            component: PostsShow,
        },
        { path: "/about", name: "about", component: About },
        { path: "/contacts", name: "contacts", component: Contacts },
        { path: "/*", name: "NotFound", component: NotFound },
    ],
});

export default router;
