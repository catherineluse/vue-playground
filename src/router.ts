import { createRouter, createWebHistory } from "vue-router";
import Community from "./components/community/Community.vue";
import UserProfile from "./components/UserProfile.vue";
import SearchCommunities from "./components/community/SearchCommunities.vue";
import Event from "./components/event/Event.vue";
import SearchEvents from "./components/event/SearchEvents.vue";
import Discussion from "./components/discussion/Discussion.vue";
import SearchDiscussions from "./components/discussion/SearchDiscussions.vue";
import Overview from "./components/community/Overview.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SearchEvents },
    { path: "/all-discussions", component: SearchDiscussions },
    { path: "/all-communities", component: SearchCommunities },
    { path: "/u/:id", component: UserProfile },
    {
      path: "/c/:communityUrl/",
      component: Community,
      children: [
        { path: "discussions", component: SearchDiscussions },
        { path: "events", component: SearchEvents },
        { path: "overview", component: Overview },
      ],
    },
    {
      path: "/c/:communityUrl/discussions/:discussionId",
      component: Discussion,
    },
    { path: "/c/:communityUrl/events/:eventId", component: Event },
  ],
});
