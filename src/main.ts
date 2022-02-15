import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';
import PortfolioIcon from './assets/icons/icon-portfolio.svg';
// import PortfolioActiveIcon from './icon-portfolioActive.svg';
// import AdviserIcon from './icon-advisor.svg';
// import AdviserActiveIcon from './icon-advisorActive.svg';
// import SettingsIcon from './icon-settings.svg';
// // import SettingsActiveIcon from './icon-settingsActive.svg';
// import PropertyIcon from './icon-building.svg';
// import EmailIcon from './icon-email.svg';
// import CallIcon from './icon-phone.svg';
// import BuildingIcon from './icon-building.svg';
// import WarningIcon from './icon-warning.svg';
// import ArrowRight from './arrow-right.svg';
// import Logo from './logo.svg';
// import Lock from './lock.svg';
// import DownloadIcon from './icon-download.svg';
// import BackIcon from './icon-back.svg';
// import PerformanceIcon from './icon-investments.svg';
// import AssetIcon from './icon-asset.svg';
// import ReportsIcon from './icon-reports.svg';
// import DollarIcon from './icon-dollar.svg';
// import BackIconGray from './icon-backGray.svg';
// import DollarIconGradient from './icon-dollarGradient.svg';
// import TickIcon from './icon-tick.svg';
// import ArrowDown from './arrow-down.svg';
// import CloseIcon from './icon-close.svg';
// import NotificationIcon from './icon-notification.svg';

export {
  PortfolioIcon,
//   PortfolioActiveIcon,
//   AdviserIcon,
//   AdviserActiveIcon,
//   SettingsIcon,
//   //SettingsActiveIcon,
//   PropertyIcon,
//   EmailIcon,
//   CallIcon,
//   BuildingIcon,
//   WarningIcon,
//   ArrowRight,
//   Logo,
//   Lock,
//   DownloadIcon,
//   BackIcon,
//   PerformanceIcon,
//   AssetIcon,
//   ReportsIcon,
//   DollarIcon,
//   BackIconGray,
//   DollarIconGradient,
//   TickIcon,
//   ArrowDown,
//   CloseIcon,
//   NotificationIcon,
};

export function howLongUntilLunch(hours: number = 12, minutes: number = 30): string {
	const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}