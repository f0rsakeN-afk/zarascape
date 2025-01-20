import { TABS } from "react-filerobot-image-editor";
import Social from "@scaleflex/icons/social";

const cropPresets = [
  {
    titleKey: "square",
    descriptionKey: "1:1",
    ratio: 1,
  },
  {
    titleKey: "portrait",
    descriptionKey: "3:4",
    ratio: 3 / 4,
  },
  {
    titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
    icon: Social, // React component, string or HTML Element
    groups: [
      {
        titleKey: "linkedIn",
        items: [
          {
            titleKey: "profilePhoto",
            width: 400,
            height: 400,
            descriptionKey: "liProfilePhotoSize",
            disableManualResize: false,
          },
          {
            titleKey: "profileCoverPhoto",
            width: 1584,
            height: 396,
            descriptionKey: "liProfileCoverPhotoSize",
          },
          {
            titleKey: "blogPostPhoto",
            width: 1200,
            height: 627,
            descriptionKey: "liBlogPostPhotoSize",
          },
          {
            titleKey: "companyLogo",
            width: 300,
            height: 300,
            descriptionKey: "liCompanyLogoSize",
          },
          {
            titleKey: "companyPageCover",
            width: 1128,
            height: 191,
            descriptionKey: "liCompanyPageCoverSize",
          },
        ],
      },
      {
        titleKey: "x",
        items: [
          {
            titleKey: "profilePhoto",
            width: 400,
            height: 400,
            descriptionKey: "twProfilePhotoSize",
          },
          {
            titleKey: "headerPhoto",
            width: 1500,
            height: 500,
            descriptionKey: "twHeaderPhotoSize",
          },
          {
            titleKey: "inStreamPhoto",
            width: 1600,
            height: 1900,
            descriptionKey: "twInStreamPhotoSize",
          },
        ],
      },
      {
        titleKey: "instagram",
        items: [
          {
            titleKey: "profilePhoto",
            width: 320,
            height: 320,
            descriptionKey: "igProfilePhotoSize",
          },
          {
            titleKey: "feedPortraitPhoto",
            width: 1080,
            height: 1350,
            descriptionKey: "igFeedPortraitPhotoSize",
          },
          {
            titleKey: "feedLandscapePhoto",
            width: 1080,
            height: 566,
            descriptionKey: "igFeedLandscapePhotoSize",
          },
          {
            titleKey: "feedSquarePhoto",
            width: 1080,
            height: 1080,
            descriptionKey: "igFeedSquarePhotoSize",
          },
          {
            titleKey: "storyPhoto",
            width: 1080,
            height: 1920,
            descriptionKey: "igStoryPhotoSize",
          },
        ],
      },
      {
        titleKey: "facebook",
        items: [
          {
            titleKey: "profilePhoto",
            width: 170,
            height: 170,
            descriptionKey: "fbProfilePhotoSize",
          },
          {
            titleKey: "profileCoverPhoto",
            width: 851,
            height: 315,
            descriptionKey: "fbProfileCoverPhotoSize",
          },
          {
            titleKey: "eventCoverPhoto",
            width: 1200,
            height: 628,
            descriptionKey: "fbEventCoverPhotoSize",
          },
          {
            titleKey: "timelinePhoto",
            width: 1200,
            height: 630,
            descriptionKey: "fbTimelinePhotoSize",
          },
          {
            titleKey: "storyPhoto",
            width: 1080,
            height: 1920,
            descriptionKey: "fbStoryPhotoSize",
          },
        ],
      },
    ],
  },
];

export const createEditorConfig = (imageUrl: string) => ({
  source: imageUrl,
  defaultSavedImageType: "png",
  defaultSavedImageName: "edited-image",
  theme: {
    palette: {
      "accent-primary": "#0f1515",
      "bg-primary": "#0f1515",
    },
    typography: {
      fontFamily: "Inter, system-ui, sans-serif",
    },
  },
  annotationsCommon: {
    fill: "#2196f3",
  },
  Text: {
    text: "Add text...",
    fonts: [
      { label: "Arial", value: "Arial" },
      { label: "Helvetica", value: "Helvetica" },
      { label: "Inter", value: "Inter" },
      { label: "Times New Roman", value: "Times New Roman" },
      { label: "Courier New", value: "Courier New" },
      { label: "Georgia", value: "Georgia" },
      { label: "Verdana", value: "Verdana" },
      { label: "Geneva", value: "Geneva" },
      { label: "Trebuchet MS", value: "Trebuchet MS" },
      { label: "Arial Black", value: "Arial Black" },
      { label: "Impact", value: "Impact" },
      { label: "Comic Sans MS", value: "Comic Sans MS" },
      { label: "Lucida Console", value: "Lucida Console" },
      { label: "Tahoma", value: "Tahoma" },
      { label: "Palatino Linotype", value: "Palatino Linotype" },
      { label: "Book Antiqua", value: "Book Antiqua" },
      { label: "Arial Narrow", value: "Arial Narrow" },
      { label: "Century Gothic", value: "Century Gothic" },
      { label: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
      { label: "Garamond", value: "Garamond" },
    ],
  },
  translations: {
    profile: "Profile",
    coverPhoto: "Cover Photo",
    facebook: "Facebook",
    socialMedia: "Social Media",
    classicTv: "Classic TV",
    wide: "Widescreen",
    square: "Square",
    portrait: "Portrait",
  },
  Crop: {
    presetsItems: cropPresets,
    autoResize: true,
  },
  defaultTabId: TABS.ADJUST,
  defaultToolId: "Crop",
  observePluginContainerSize: true,
  showCanvasOnly: false,
});
