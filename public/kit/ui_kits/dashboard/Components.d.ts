// Components.d.ts — the complete catalog of the 22 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ChevronDownPlane) and usable directly in JSX.
import * as React from 'react';

// figma layer: "chevron-down/plane" (node 1:316)
export interface ChevronDownPlaneProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "chevron-right" (node 1:127)
export interface ChevronRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Close" (node 1:275)
export interface CloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "close-large" (node 1:121)
export interface CloseLargeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "collapse" (node 1:101)
export interface CollapseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Componente" (node 1:406)
export interface ComponenteProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "desktop-side-nav-resize-button" (node 1:103)
export interface DesktopSideNavResizeButtonProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "icon" | "text";
  status?: "hover" | "default" | "focus";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "expand" (node 1:97)
export interface ExpandProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_footer" (node 1:398)
export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  copyright?: string;
  style2?: "dark";
  /** Text content; defaults to "Powered by". */
  text1?: string;
  /** Text content; defaults to "© 2025 Copyright OpenEconomics | Vat 12504821005". */
  text2?: string;
}

// figma layer: "_header" (node 1:15)
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  iconSlot?: React.ReactNode;
  title?: string;
  showSection?: boolean;
  section?: string;
  showDescription?: boolean;
  description?: string;
}

// figma layer: "help-outline" (node 1:146)
export interface HelpOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Loghi/white/openeconomics" (node 1:379)
export interface LoghiWhiteOpeneconomicsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "logo-civiqa" (node 1:265)
export interface LogoCiviqaProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "logo-externalytics" (node 1:124)
export interface LogoExternalyticsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "logo-sonar" (node 1:318)
export interface LogoSonarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "menu" (node 1:119)
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Notification--new" (node 1:312)
export interface NotificationNewProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "placeholder" (node 1:6)
export interface PlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Placeholder" (node 1:34)
export interface Placeholder2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "search-stroke" (node 1:277)
export interface SearchStrokeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "settings" (node 1:144)
export interface SettingsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "top-nav" (node 1:1293)
export interface TopNav2Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const ChevronDownPlane: React.FC<ChevronDownPlaneProps>;
declare const ChevronRight: React.FC<ChevronRightProps>;
declare const Close: React.FC<CloseProps>;
declare const CloseLarge: React.FC<CloseLargeProps>;
declare const Collapse: React.FC<CollapseProps>;
declare const Componente: React.FC<ComponenteProps>;
declare const DesktopSideNavResizeButton: React.FC<DesktopSideNavResizeButtonProps>;
declare const Expand: React.FC<ExpandProps>;
declare const Footer: React.FC<FooterProps>;
declare const Header: React.FC<HeaderProps>;
declare const HelpOutline: React.FC<HelpOutlineProps>;
declare const LoghiWhiteOpeneconomics: React.FC<LoghiWhiteOpeneconomicsProps>;
declare const LogoCiviqa: React.FC<LogoCiviqaProps>;
declare const LogoExternalytics: React.FC<LogoExternalyticsProps>;
declare const LogoSonar: React.FC<LogoSonarProps>;
declare const Menu: React.FC<MenuProps>;
declare const NotificationNew: React.FC<NotificationNewProps>;
declare const Placeholder: React.FC<PlaceholderProps>;
declare const Placeholder2: React.FC<Placeholder2Props>;
declare const SearchStroke: React.FC<SearchStrokeProps>;
declare const Settings: React.FC<SettingsProps>;
declare const TopNav2: React.FC<TopNav2Props>;
declare global {
  interface Window {
    ChevronDownPlane: React.FC<ChevronDownPlaneProps>;
    ChevronRight: React.FC<ChevronRightProps>;
    Close: React.FC<CloseProps>;
    CloseLarge: React.FC<CloseLargeProps>;
    Collapse: React.FC<CollapseProps>;
    Componente: React.FC<ComponenteProps>;
    DesktopSideNavResizeButton: React.FC<DesktopSideNavResizeButtonProps>;
    Expand: React.FC<ExpandProps>;
    Footer: React.FC<FooterProps>;
    Header: React.FC<HeaderProps>;
    HelpOutline: React.FC<HelpOutlineProps>;
    LoghiWhiteOpeneconomics: React.FC<LoghiWhiteOpeneconomicsProps>;
    LogoCiviqa: React.FC<LogoCiviqaProps>;
    LogoExternalytics: React.FC<LogoExternalyticsProps>;
    LogoSonar: React.FC<LogoSonarProps>;
    Menu: React.FC<MenuProps>;
    NotificationNew: React.FC<NotificationNewProps>;
    Placeholder: React.FC<PlaceholderProps>;
    Placeholder2: React.FC<Placeholder2Props>;
    SearchStroke: React.FC<SearchStrokeProps>;
    Settings: React.FC<SettingsProps>;
    TopNav2: React.FC<TopNav2Props>;
  }
}
