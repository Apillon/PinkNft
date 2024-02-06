import colors from '~~/tailwind.colors';
import type { GlobalThemeOverrides, MessageProviderProps } from 'naive-ui';

type MessageThemeOverrides = NonNullable<MessageProviderProps['themeOverrides']>;
const messageOverrides: MessageThemeOverrides = {
  borderRadius: '8px',
  closeIconColor: colors.bg.DEFAULT,
  closeIconColorError: colors.bg.DEFAULT,
  closeIconColorHover: colors.bg.DEFAULT,
  closeIconColorHoverError: colors.bg.DEFAULT,
  closeIconColorHoverInfo: colors.bg.DEFAULT,
  closeIconColorHoverLoading: colors.bg.DEFAULT,
  closeIconColorHoverSuccess: colors.bg.DEFAULT,
  closeIconColorHoverWarning: colors.bg.DEFAULT,
  closeIconColorInfo: colors.bg.DEFAULT,
  closeIconColorLoading: colors.bg.DEFAULT,
  closeIconColorPressed: colors.bg.DEFAULT,
  closeIconColorPressedError: colors.bg.DEFAULT,
  closeIconColorPressedInfo: colors.bg.DEFAULT,
  closeIconColorPressedLoading: colors.bg.DEFAULT,
  closeIconColorPressedSuccess: colors.bg.DEFAULT,
  closeIconColorPressedWarning: colors.bg.DEFAULT,
  closeIconColorSuccess: colors.bg.DEFAULT,
  closeIconColorWarning: colors.bg.DEFAULT,
  color: colors.white,
  colorError: colors.white,
  colorInfo: colors.white,
  colorLoading: colors.white,
  colorSuccess: colors.white,
  colorWarning: colors.white,
  iconColor: colors.bg.DEFAULT,
  iconColorError: colors.bg.DEFAULT,
  iconColorInfo: colors.bg.DEFAULT,
  iconColorLoading: colors.bg.DEFAULT,
  iconColorSuccess: colors.bg.DEFAULT,
  iconColorWarning: colors.bg.DEFAULT,
  maxWidth: '380px',
  padding: '24px',
  textColor: colors.bg.DEFAULT,
  textColorError: colors.bg.DEFAULT,
  textColorInfo: colors.bg.DEFAULT,
  textColorLoading: colors.bg.DEFAULT,
  textColorSuccess: colors.bg.DEFAULT,
  textColorWarning: colors.bg.DEFAULT,
};

/**
 * Theme configs
 */
export const NaiveTheme: GlobalThemeOverrides = {
  common: {
    baseColor: colors.bg.DEFAULT,
    bodyColor: colors.white,
    errorColor: colors.pink.DEFAULT,
    fontFamily: 'Inter',
    fontSize: '16px',
    infoColor: colors.blue,
    primaryColor: colors.primary,
    primaryColorHover: colors.primary,
    primaryColorPressed: colors.primary,
    successColor: colors.green,
    textColor2: colors.white,
    warningColor: colors.yellow,
  },
  Alert: {
    border: `3px solid ${colors.pink.DEFAULT}`,
    borderError: `3px solid ${colors.pink.DEFAULT}`,
    borderInfo: `3px solid ${colors.blue}`,
    borderSuccess: `3px solid ${colors.green}`,
    borderWarning: `3px solid ${colors.orange}`,
    borderRadius: '8px',
    color: colors.white,
    colorError: colors.white,
    colorInfo: colors.white,
    colorLoading: colors.white,
    colorSuccess: colors.white,
    colorWarning: colors.white,
    contentTextColor: colors.bg.DEFAULT,
    contentTextColorError: colors.bg.DEFAULT,
    contentTextColorInfo: colors.bg.DEFAULT,
    contentTextColorSuccess: colors.bg.DEFAULT,
    contentTextColorWarning: colors.bg.DEFAULT,
    textColor: colors.bg.DEFAULT,
    textColorError: colors.bg.DEFAULT,
    textColorInfo: colors.bg.DEFAULT,
    textColorLoading: colors.bg.DEFAULT,
    textColorSuccess: colors.bg.DEFAULT,
    textColorWarning: colors.bg.DEFAULT,
    titleTextColor: colors.bg.DEFAULT,
    titleTextColorError: colors.bg.DEFAULT,
    titleTextColorInfo: colors.bg.DEFAULT,
    titleTextColorSuccess: colors.bg.DEFAULT,
    titleTextColorWarning: colors.bg.DEFAULT,
    titleFontWeight: '700',
  },
  Button: {
    border: `2px solid ${colors.border}`,
    borderDisabled: `2px solid ${colors.border}`,
    borderDisabledPrimary: `2px solid ${colors.border}`,
    borderError: `2px solid ${colors.border}`,
    borderFocusError: `2px solid ${colors.pink.DEFAULT}`,
    borderHoverError: `2px solid ${colors.pink.DEFAULT}`,
    borderPressedError: `2px solid ${colors.pink.DEFAULT}`,
    borderFocus: `2px solid ${colors.border}`,
    borderHover: `2px solid ${colors.border}`,
    borderPrimary: `2px solid ${colors.border}`,
    borderFocusPrimary: `2px solid ${colors.border}`,
    borderHoverPrimary: `2px solid ${colors.border}`,
    borderPressedPrimary: `2px solid ${colors.border}`,
    borderRadiusTiny: '0px',
    borderRadiusSmall: '8px',
    borderRadiusMedium: '8px',
    borderRadiusLarge: '12px',
    colorDisabledPrimary: colors.bg.lighter,
    colorInfo: colors.white,
    colorHover: colors.bg.lighter,
    colorHoverInfo: colors.white,
    colorFocusInfo: colors.white,
    colorPressedInfo: colors.white,
    colorDisabledInfo: colors.white,
    colorQuaternary: 'transparent',
    colorQuaternaryHover: colors.primary,
    colorQuaternaryPressed: colors.primary,
    colorTertiaryHover: colors.bg.lighter,
    colorTertiaryPressed: colors.bg.lighter,
    fontSizeSmall: '14px',
    fontSizeMedium: '14px',
    fontSizeLarge: '14px',
    fontWeight: 'bold',
    heightMedium: '48px',
    heightLarge: '64px',
    heightSmall: '40px',
    heightTiny: '24px',
    paddingLarge: '8px',
    paddingMedium: '8px 24px',
    paddingSmall: '6px 20px',
    paddingTiny: '1px',
    textColorHover: 'inherit',
    textColorInfo: colors.bg.DEFAULT,
    textColorFocus: colors.white,
    textColorError: colors.pink.DEFAULT,
    textColorFocusError: colors.pink.DEFAULT,
    textColorHoverError: colors.pink.DEFAULT,
    textColorGhostHoverError: colors.pink.DEFAULT,
    textColorTextHoverError: colors.pink.DEFAULT,
    textColorPressedError: colors.pink.DEFAULT,
    textColorTextError: colors.pink.DEFAULT,
    textColorTertiary: colors.white,
  },
  Card: {
    borderColor: colors.primary,
    borderRadius: '8px',
    color: colors.bg.DEFAULT,
    colorEmbedded: colors.bg.DEFAULT,
    colorEmbeddedModal: colors.bg.DEFAULT,
    colorEmbeddedPopover: colors.bg.DEFAULT,
    colorModal: colors.bg.DEFAULT,
    colorPopover: colors.bg.DEFAULT,
    colorTarget: colors.bg.DEFAULT,
    paddingSmall: '32px',
    paddingMedium: '16px 64px 16px 64px',
  },
  DataTable: {
    borderColor: colors.bg.lighter,
    tdColor: colors.bg.DEFAULT,
    tdColorHover: colors.bg.dark,
    tdTextColor: colors.body,
    thColor: colors.bg.DEFAULT,
    thColorHover: colors.bg.DEFAULT,
    thFontWeight: '700',
    thTextColor: colors.white,
  },
  Dialog: {
    border: `1px solid ${colors.bg.lighter}`,
    borderRadius: '0px',
    closeBorderRadius: '50%',
    closeColorHover: colors.white,
    closeColorPressed: colors.white,
    closeIconColor: colors.white,
    closeIconColorPressed: colors.bg.DEFAULT,
    closeIconColorHover: colors.bg.DEFAULT,
    color: colors.bg.DEFAULT,
    contentMargin: '16px 0',
    titleFontSize: '20px',
  },
  Dropdown: {
    borderRadius: '8px',
    color: colors.bg.dark,
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    fontSizeHuge: '18px',
    optionColorActive: colors.bg.lighter,
    optionColorHover: colors.bg.lighter,
    optionTextColor: colors.white,
    optionTextColorHover: colors.white,
    optionTextColorActive: colors.white,
    optionTextColorChildActive: colors.white,
    padding: '16px 12px',
  },
  Form: {
    feedbackFontSizeSmall: '12px',
    feedbackFontSizeMedium: '12px',
    feedbackFontSizeLarge: '14px',
    feedbackHeightSmall: '24px',
    feedbackHeightMedium: '32px',
    feedbackHeightLarge: '40px',
    labelFontSizeTopSmall: '10px',
    labelFontSizeLeftSmall: '10px',
    labelFontSizeLeftMedium: '12px',
    labelFontSizeTopMedium: '12px',
    labelFontSizeLeftLarge: '14px',
    labelFontSizeTopLarge: '14px',
    labelPaddingVertical: '0 0 8px',
    labelTextColor: colors.white,
  },
  Input: {
    border: `1px solid ${colors.bg.lighter}`,
    borderFocus: `1px solid ${colors.white}`,
    borderHover: `1px solid ${colors.body}`,
    borderError: `1px solid ${colors.pink.DEFAULT}`,
    borderFocusError: `1px solid ${colors.pink.DEFAULT}`,
    borderHoverError: `1px solid ${colors.pink.DEFAULT}`,
    borderDisabled: `1px solid ${colors.bg.lighter}`,
    borderRadius: '8px',
    boxShadowFocus: 'none',
    boxShadowFocusError: 'none',
    boxShadowFocusWarning: 'none',
    caretColor: colors.white,
    clearSize: '24px',
    color: colors.bg.light,
    colorDisabled: colors.bg.dark,
    colorFocus: colors.bg.light,
    colorFocusError: colors.bg.light,
    colorFocusWarning: colors.bg.light,
    fontSizeTiny: '12px',
    fontSizeSmall: '14px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    groupLabelTextColor: colors.white,
    heightSmall: '40px',
    heightMedium: '48px',
    heightLarge: '48px',
    iconSize: '24px',
    paddingTiny: '10px',
    paddingSmall: '12px',
    paddingMedium: '20px',
    paddingLarge: '25px',
    placeholderColor: colors.body,
    textColor: colors.white,
    textColorDisabled: colors.bodyDark,
  },
  Layout: {
    textColor: colors.white,
    siderBorderColor: colors.bg.lighter,
  },
  Message: messageOverrides,
  Modal: {
    color: colors.bg.DEFAULT,
    zIndex: 80,
    peers: {
      Scrollbar: {
        zIndex: 84,
      },
      Card: {
        borderColor: colors.bg.lighter,
        borderRadius: '0px',
        paddingSmall: '28px 40px',
        paddingMedium: '32px 64px',
        paddingLarge: '32px 64px',
        paddingHuge: '32px 64px',
        zIndex: 83,
      },
      Dialog: {
        border: `1px solid ${colors.bg.lighter}`,
        borderRadius: '0px',
        closeColorHover: 'inherit',
        closeMargin: '-24px -24px 0 0',
        contentMargin: '16px 0',
        padding: '64px 64px 32px',
        zIndex: 82,
      },

      zIndex: 81,
    },
  },
  Pagination: {
    itemColorDisabled: colors.bodyDark,
  },
  Popover: {
    arrowHeight: '14px',
    spaceArrow: '14px',
    textColor: colors.white,
  },
  Select: {
    peers: {
      InternalSelection: {
        arrowColor: colors.white,
        arrowSize: '24px',
        border: `1px solid ${colors.bg.lighter}`,
        borderActive: `1px solid ${colors.white}`,
        borderFocus: `1px solid ${colors.white}`,
        borderHover: `1px solid ${colors.body}`,
        borderRadius: '8px',
        boxShadowActive: 'none',
        boxShadowFocus: 'none',
        boxShadowHover: 'none',
        color: colors.bg.light,
        colorActive: colors.bg.light,
        colorDisabled: colors.bg.DEFAULT,
        heightLarge: '48px',
        heightMedium: '48px',
        heightSmall: '40px',
        heightTiny: '32px',
      },
      InternalSelectMenu: {
        borderRadius: '8px',
        color: colors.bg.dark,
        optionCheckColor: colors.bg.lighter,
        optionColorActive: colors.bg.lighter,
        optionColorActivePending: colors.bg.lighter,
        optionColorPending: colors.bg.lighter,
        optionHeightLarge: '48px',
        optionHeightMedium: '48px',
        optionHeightSmall: '32px',
        paddingSmall: '0px 10px',
        paddingMedium: '0px 10px',
        paddingLarge: '0px 20px',
        actionTextColor: colors.white,
        optionTextColor: colors.white,
        optionTextColorActive: colors.white,
        optionTextColorPressed: colors.white,
      },
    },
  },
  Tag: {
    colorInfo: colors.bg.lighter,
    fontSizeSmall: '10px',
    heightSmall: '24px',
  },
  Upload: {
    draggerBorder: `none`,
    draggerBorderHover: `none`,
    draggerColor: colors.bg.light,
  },
};