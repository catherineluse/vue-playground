import { createRouter, createWebHistory } from "vue-router";
import Channel from "./components/channel/channel.vue";
import UserProfile from "./components/UserProfile.vue";
import SearchChannels from "./components/channel/SearchChannels.vue";
import Event from "./components/event/Event.vue";
import AllEvents from "./components/event/AllEvents.vue";
import SearchEvents from "./components/event/SearchEvents.vue";
import Discussion from "./components/discussion/Discussion.vue";
import AllDiscussions from "./components/discussion/AllDiscussions.vue";
import SearchDiscussions from "./components/discussion/SearchDiscussions.vue";
import Overview from "./components/channel/Overview.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AllEvents },
    { path: "/events", component: AllEvents },
    { path: "/discussions", component: AllDiscussions },
    { path: "/channels", component: SearchChannels },
    { path: "/u/:username", component: UserProfile },
    {
      path: "/c/:channelId/",
      component: Channel,
      children: [
        { path: "", component: Overview },
        // channels > channelId > Discussions
        {
          path: "discussions",
          component: SearchDiscussions,
          children: [
            {
              // channels > channelId > Discussions > Discussion Title...
              path: ":discussionId",
              component: Discussion,
            },
          ],
        },
        // channels > channelId > Events
        {
          path: "events",
          component: SearchEvents,
          children: [
            // channels > channelId > Events > Event Title...
            { path: ":eventId", component: Event },
          ],
        },
      ],
    },
  ],
});

// - discussion detail page with breadcrumbs and back button
// - event detail page with breadcrumbs and back button
// - channel breadcrumbs include events/discussions
// - event list uses sticky dates

// buttons
// - channel detail and list page - pin to site navbar

// site navbar
// - pinned channels section
// - feeds
// - my feeds
// - log in/log out buttons
// - dark mode

// forms
// - create/edit community
// - create/edit discussion
// - create/edit event

// feeds
// - list
// - detail - show sources, author
// - feed item preview - overlay

// sort and filter events
// - active filters displayed as chips
// - filter dropdowns displayed as overlays
// - toggle map view or list view
// - map view has list view in right-side panel
// - selected map pins are selected in right-side panel