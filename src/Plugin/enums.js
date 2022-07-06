import enEnums from "./en-enums";
import esEnums from "./es-enums";

/**
 * We want these enums to be available immediately, that's why we import
 * both, instead of using the dynamic/async approach with import().
 */

let enumsToUse;

// When moving to WordPress, use the next commented condition instead of browser language
//if (document.documentElement.lang === 'es') {

// Use browser language
if (navigator.language.startsWith('es')) {
	enumsToUse = esEnums;
} else {
	enumsToUse = enEnums;
}

export const Country = enumsToUse.Country;
export const MeetingMode = enumsToUse.MeetingMode;
export const GroupType = enumsToUse.GroupType;
export const Text = enumsToUse.Text;
