// *-----> INSERT FUNCTION IMPORTS HERE
import detailsCardImage from './detailsCardImage';
import favoriteIconHandler from './favoriteIconHandler';
import mapSkillColors from './mapSkillColors';
import registrationPadding from './registrationPadding';
import hasWindowSizeChanged from './hasWindowSizeChanged';
import landingPageBgHandler from './landingPageBgHandler';
import formProgression from './formProgression';
import alert from './alert';
/*-------------------------*/

// *-----> PUT VARIABLES HERE
const function_list = {
  detailsCardImage, // Get div and img tag for cards/modals
  favoriteIconHandler, // handles favorite icon display
  mapSkillColors, // takes in skill id returns color by string text
  registrationPadding, // takes in window x/y to dynamically update padding
  hasWindowSizeChanged, // checks to see if window size has updated returns t/f
  landingPageBgHandler, // WIP NOT DONE NOT IN USE
  formProgression, // handles progression check, and safe-guards registration from errors
  alert, // custom alert pop up
};
/*-------------------------*/

export default function_list;