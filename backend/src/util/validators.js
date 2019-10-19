// NPM Packages
const { check } = require('express-validator/check');

// TODO Add validations for events and survey_responses Array
const USER_DATA_VALIDATOR = [
  check('bio.first_name')
    .isAlpha()
    .trim()
    .escape(),
  check('bio.last_name')
    .isAlpha()
    .trim()
    .escape(),
  check('bio.phone_number')
    .isAscii()
    .trim()
    .escape(),
  check('bio.email')
    .isEmail()
    .trim(),
  check('bio.date_of_birth')
    .exists()
    .trim()
    .escape(),
  check('bio.street_address')
    .isAscii()
    .trim()
    .escape(),
  check('bio.city')
    .isAscii()
    .trim()
    .escape(),
  check('bio.state')
    .isAlpha()
    .trim()
    .escape(),
  check('bio.zip_code')
    .isAscii()
    .trim()
    .escape(),
  check('skills_interests.languages')
    .isAscii()
    .trim()
    .escape(),
  check('history.volunteer_interest_cause')
    .isAscii()
    .trim()
    .escape(),
  check('history.volunteer_support')
    .isAscii()
    .trim()
    .escape(),
  check('history.volunteer_commitment')
    .isAscii()
    .trim()
    .escape(),
  check('skills_interests.skills_qualifications')
    .isAscii()
    .trim()
    .escape(),
  check('history.previous_volunteer_experience')
    .isAscii()
    .trim()
    .escape(),
  check('availability.weekday_mornings').isBoolean(),
  check('availability.weekday_afternoons').isBoolean(),
  check('availability.weekday_evenings').isBoolean(),
  check('availability.weekend_mornings').isBoolean(),
  check('availability.weekend_afternoons').isBoolean(),
  check('availability.weekend_evenings').isBoolean(),
  check('skills_interests.admin_office').isBoolean(),
  check('skills_interests.admin_virtual').isBoolean(),
  check('skills_interests.atlanta_shelter').isBoolean(),
  check('skills_interests.orlando_shelter').isBoolean(),
  check('skills_interests.graphic_web_design').isBoolean(),
  check('skills_interests.special_events').isBoolean(),
  check('skills_interests.grant_writing').isBoolean(),
  check('skills_interests.writing_editing').isBoolean(),
  check('skills_interests.social_media').isBoolean(),
  check('skills_interests.fundraising').isBoolean(),
  check('skills_interests.finance').isBoolean(),
  check('skills_interests.office_maintenance_housekeeping').isBoolean(),
  check('skills_interests.international_projects').isBoolean(),
  check('skills_interests.volunteer_coordination').isBoolean(),
  check('skills_interests.outreach').isBoolean(),
  check('referral.friend').isBoolean(),
  check('referral.newsletter').isBoolean(),
  check('referral.event').isBoolean(),
  check('referral.volunteer_match').isBoolean(),
  check('referral.internet').isBoolean(),
  check('referral.social_media').isBoolean(),
  check('employment.name')
    .isAscii()
    .trim()
    .escape(),
  check('employment.position')
    .isAscii()
    .trim()
    .escape(),
  check('employment.duration')
    .isAscii()
    .trim()
    .escape(),
  check('employment.location')
    .isAscii()
    .trim()
    .escape(),
  check('employment.previous_name')
    .isAscii()
    .trim()
    .escape(),
  check('employment.previous_reason_for_leaving')
    .isAscii()
    .trim()
    .escape(),
  check('employment.previous_location')
    .isAscii()
    .trim()
    .escape(),
  check('reference.name')
    .isAscii()
    .trim()
    .escape(),
  check('reference.phone_number')
    .isAscii()
    .trim()
    .escape(),
  check('reference.email')
    .isEmail()
    .trim()
    .escape(),
  check('reference.relationship')
    .isAscii()
    .trim()
    .escape(),
  check('reference.duration')
    .isAscii()
    .trim()
    .escape(),
  check('criminal.felony').isBoolean(),
  check('criminal.sexual_violent').isBoolean(),
  check('criminal.drugs').isBoolean(),
  check('criminal.driving').isBoolean(),
  check('criminal.none').isBoolean(),
  check('criminal.explanation')
    .trim()
    .escape(),
  check('ice.name')
    .isAscii()
    .trim()
    .escape(),
  check('ice.relationship')
    .isAscii()
    .trim()
    .escape(),
  check('ice.phone_number')
    .isAscii()
    .trim()
    .escape(),
  check('ice.email')
    .isEmail()
    .trim()
    .escape(),
  check('ice.address')
    .isAscii()
    .trim()
    .escape(),
  check('permissions.comments')
    .trim()
    .escape(),
  check('permissions.reference').isBoolean(),
  check('permissions.personal_image').isBoolean(),
  check('permissions.email_list').isBoolean(),
  check('permissions.signature')
    .isAscii()
    .trim()
    .escape()
];

// TODO Add validations for volunteers Array
const EVENT_VALIDATOR = [
  check('name')
    .isAscii()
    .trim(),
  check('date').exists(),
  check('location')
    .isAscii()
    .trim(),
  check('description')
    .isAscii()
    .trim(),
  check('contact_phone')
    .optional()
    .isAscii()
    .trim(),
  check('contact_email')
    .optional()
    .isAscii()
    .trim(),
  check('max_volunteers').isNumeric(),
  check('volunteers')
    .optional()
    .isArray()
    .trim(),
  check('external_links')
    .optional()
    .isArray()
    .trim()
  // check('volunteers').custom(value => {
  //   if ()
  // })
];

module.exports = {
  USER_DATA_VALIDATOR,
  EVENT_VALIDATOR
};
