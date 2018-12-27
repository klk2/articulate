/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

/*
 * Global
 */
export const MISSING_API = 'app/App/MISSING_API';
export const RESET_MISSING_API = 'app/App/RESET_MISSING_API';
export const CHECK_API = 'app/App/CHECK_API';
export const RESET_STATUS_FLAGS = 'app/App/RESET_STATUS_FLAGS';
export const TOGGLE_CONVERSATION_BAR = 'app/App/TOGGLE_CONVERSATION_BAR';
export const CLOSE_NOTIFICATION = 'app/App/CLOSE_NOTIFICATION';
export const SEND_MESSAGE = 'app/App/SEND_MESSAGE';
export const RESPOND_MESSAGE = 'app/App/RESPOND_MESSAGE';
export const STORE_SOURCE_DATA = 'app/App/STORE_SOURCE_DATA';
export const RESET_SESSION = 'app/App/RESET_SESSION';
export const RESET_SESSION_SUCCESS = 'app/App/RESET_SESSION_SUCCESS';

/*
 * Agents
 */
export const LOAD_AGENTS = 'app/AgentsPage/LOAD_AGENTS';
export const LOAD_AGENTS_SUCCESS = 'app/AgentsPage/LOAD_AGENTS_SUCCESS';
export const LOAD_AGENTS_ERROR = 'app/AgentsPage/LOAD_AGENTS_ERROR';

/*
 * Agent
 */
export const RESET_AGENT_DATA = 'app/AgentPage/RESET_AGENT_DATA';
export const LOAD_AGENT = 'app/AgentPage/LOAD_AGENT';
export const LOAD_AGENT_ERROR = 'app/AgentPage/LOAD_AGENT_ERROR';
export const LOAD_AGENT_SUCCESS = 'app/AgentPage/LOAD_AGENT_SUCCESS';
export const CHANGE_AGENT_DATA = 'app/AgentPage/CHANGE_AGENT_DATA';
export const CHANGE_AGENT_NAME = 'app/AgentPage/CHANGE_AGENT_NAME';
export const CHANGE_WEBHOOK_DATA = 'app/AgentPage/CHANGE_WEBHOOK_DATA';
export const CHANGE_WEBHOOK_PAYLOAD_TYPE = 'app/AgentPage/CHANGE_WEBHOOK_PAYLOAD_TYPE';
export const CHANGE_POST_FORMAT_DATA = 'app/AgentPage/CHANGE_POST_FORMAT_DATA';
export const CHANGE_AGENT_SETTINGS_DATA = 'app/AgentPage/CHANGE_AGENT_SETTINGS_DATA';
export const ADD_AGENT_FALLBACK = 'app/AgentPage/ADD_AGENT_FALLBACK';
export const DELETE_AGENT_FALLBACK = 'app/AgentPage/DELETE_AGENT_FALLBACK';
export const ADD_AGENT = 'app/AgentPage/ADD_AGENT';
export const ADD_AGENT_ERROR = 'app/AgentPage/ADD_AGENT_ERROR';
export const ADD_AGENT_SUCCESS = 'app/AgentPage/ADD_AGENT_SUCCESS';
export const UPDATE_AGENT = 'app/AgentPage/UPDATE_AGENT';
export const UPDATE_AGENT_ERROR = 'app/AgentPage/UPDATE_AGENT_ERROR';
export const UPDATE_AGENT_SUCCESS = 'app/AgentPage/UPDATE_AGENT_SUCCESS';
export const DELETE_AGENT = 'app/AgentPage/DELETE_AGENT';
export const DELETE_AGENT_ERROR = 'app/AgentPage/DELETE_AGENT_ERROR';
export const DELETE_AGENT_SUCCESS = 'app/AgentPage/DELETE_AGENT_SUCCESS';
export const TRAIN_AGENT = 'app/AgentPage/TRAIN_AGENT';
export const TRAIN_AGENT_ERROR = 'app/AgentPage/TRAIN_AGENT_ERROR';
export const ADD_HEADER_AGENT_WEBHOOK = 'app/AgentPage/ADD_HEADER_AGENT_WEBHOOK';
export const DELETE_HEADER_AGENT_WEBHOOK = 'app/AgentPage/DELETE_HEADER_AGENT_WEBHOOK';
export const CHANGE_HEADER_KEY_AGENT_WEBHOOK = 'app/AgentPage/CHANGE_HEADER_KEY_AGENT_WEBHOOK';
export const CHANGE_HEADER_VALUE_AGENT_WEBHOOK = 'app/AgentPage/CHANGE_HEADER_VALUE_AGENT_WEBHOOK';
export const LOAD_AGENT_DOCUMENTS = 'app/AgentPage/LOAD_AGENT_DOCUMENTS';
export const LOAD_AGENT_DOCUMENTS_ERROR = 'app/AgentPage/LOAD_AGENT_DOCUMENTS_ERROR';
export const LOAD_AGENT_DOCUMENTS_SUCCESS = 'app/AgentPage/LOAD_AGENT_DOCUMENTS_SUCCESS';

/*
 * Sayings
 */
export const LOAD_SAYINGS = 'app/SayingsPage/LOAD_SAYINGS';
export const LOAD_SAYINGS_ERROR = 'app/SayingsPage/LOAD_SAYINGS_ERROR';
export const LOAD_SAYINGS_SUCCESS = 'app/SayingsPage/LOAD_SAYINGS_SUCCESS';
export const ADD_SAYING = 'app/SayingsPage/ADD_SAYING';
export const ADD_SAYING_ERROR = 'app/SayingsPage/ADD_SAYING_ERROR';
export const DELETE_SAYING = 'app/SayingsPage/DELETE_SAYING';
export const DELETE_SAYING_ERROR = 'app/SayingsPage/DELETE_SAYING_ERROR';
export const TAG_KEYWORD = 'app/SayingsPage/TAG_KEYWORD';
export const UNTAG_KEYWORD = 'app/SayingsPage/UNTAG_KEYWORD';
export const UPDATE_SAYING_ERROR = 'app/SayingsPage/UPDATE_SAYING_ERROR';
export const ADD_ACTION_SAYING = 'app/SayingsPage/ADD_ACTION_SAYING';
export const DELETE_ACTION_SAYING = 'app/SayingsPage/DELETE_ACTION_SAYING';
export const ADD_ACTION_NEW_SAYING = 'app/SayingsPage/ADD_ACTION_NEW_SAYING';
export const DELETE_ACTION_NEW_SAYING = 'app/SayingsPage/DELETE_ACTION_NEW_SAYING';
export const SEND_SAYING_TO_ACTION = 'app/SayingsPage/SEND_SAYING_TO_ACTION';
export const CLEAR_SAYING_TO_ACTION = 'app/SayingsPage/CLEAR_SAYING_TO_ACTION';
export const LOAD_CATEGORIES = 'app/SayingsPage/LOAD_CATEGORIES';
export const LOAD_CATEGORIES_ERROR = 'app/SayingsPage/LOAD_CATEGORIES_ERROR';
export const LOAD_CATEGORIES_SUCCESS = 'app/SayingsPage/LOAD_CATEGORIES_SUCCESS';
export const LOAD_FILTERED_CATEGORIES = 'app/SayingsPage/LOAD_FILTERED_CATEGORIES';
export const LOAD_FILTERED_CATEGORIES_ERROR = 'app/SayingsPage/LOAD_FILTERED_CATEGORIES_ERROR';
export const LOAD_FILTERED_CATEGORIES_SUCCESS = 'app/SayingsPage/LOAD_FILTERED_CATEGORIES_SUCCESS';
export const SELECT_CATEGORY = 'app/SayingsPage/SELECT_CATEGORY';
export const CHANGE_SAYINGS_PAGE_SIZE = 'app/SayingsPage/CHANGE_SAYINGS_PAGE_SIZE';
export const COPY_SAYING = 'app/SayingsPage/COPY_SAYING';

/*
 * Keywords
 */
export const LOAD_KEYWORDS = 'app/KeywordsPage/LOAD_KEYWORDS';
export const LOAD_KEYWORDS_ERROR = 'app/KeywordsPage/LOAD_KEYWORDS_ERROR';
export const LOAD_KEYWORDS_SUCCESS = 'app/KeywordsPage/LOAD_KEYWORDS_SUCCESS';
export const DELETE_KEYWORD = 'app/KeywordsPage/DELETE_KEYWORD';
export const DELETE_KEYWORD_ERROR = 'app/KeywordsPage/DELETE_KEYWORD_ERROR';
export const CHANGE_KEYWORDS_PAGE_SIZE = 'app/SayingsPage/CHANGE_KEYWORDS_PAGE_SIZE';

/*
 * Settings
 */
export const LOAD_SETTINGS = 'app/SettingsPage/LOAD_SETTINGS';
export const LOAD_SETTINGS_ERROR = 'app/SettingsPage/LOAD_SETTINGS_ERROR';
export const LOAD_SETTINGS_SUCCESS = 'app/SettingsPage/LOAD_SETTINGS_SUCCESS';
export const UPDATE_SETTINGS = 'app/SettingsPage/UPDATE_SETTINGS';
export const UPDATE_SETTINGS_ERROR = 'app/SettingsPage/UPDATE_SETTINGS_ERROR';
export const UPDATE_SETTINGS_SUCCESS = 'app/SettingsPage/UPDATE_SETTINGS_SUCCESS';
export const CHANGE_SETTINGS_DATA = 'app/SettingsPage/CHANGE_SETTINGS_DATA';
export const ADD_FALLBACK = 'app/SettingsPage/ADD_FALLBACK';
export const DELETE_FALLBACK = 'app/SettingsPage/DELETE_FALLBACK';

/*
 * Actions
 */
export const RESET_ACTION_DATA = 'app/ActionPage/RESET_ACTION_DATA';
export const LOAD_ACTIONS = 'app/ActionPage/LOAD_ACTIONS';
export const LOAD_ACTIONS_ERROR = 'app/ActionPage/LOAD_ACTIONS_ERROR';
export const LOAD_ACTIONS_SUCCESS = 'app/ActionPage/LOAD_ACTIONS_SUCCESS';
export const LOAD_ACTION = 'app/ActionPage/LOAD_ACTION';
export const LOAD_ACTION_ERROR = 'app/ActionPage/LOAD_ACTION_ERROR';
export const LOAD_ACTION_SUCCESS = 'app/ActionPage/LOAD_ACTION_SUCCESS';
export const CHANGE_ACTION_NAME = 'app/ActionPage/CHANGE_ACTION_NAME';
export const CHANGE_ACTION_DATA = 'app/ActionPage/CHANGE_ACTION_DATA';
export const ADD_NEW_SLOT = 'app/ActionPage/ADD_NEW_SLOT';
export const ADD_ACTION_RESPONSE = 'app/ActionPage/ADD_ACTION_RESPONSE';
export const CHAIN_ACTION_TO_RESPONSE = 'app/ActionPage/CHAIN_ACTION_TO_RESPONSE';
export const UNCHAIN_ACTION_FROM_RESPONSE = 'app/ActionPage/UNCHAIN_ACTION_FROM_RESPONSE';
export const DELETE_ACTION_RESPONSE = 'app/ActionPage/DELETE_ACTION_RESPONSE';
export const CHANGE_SLOT_NAME = 'app/ActionPage/CHANGE_SLOT_NAME';
export const CHANGE_SLOT_DATA = 'app/ActionPage/CHANGE_SLOT_DATA';
export const ADD_SLOT_TEXT_PROMPT_SLOT = 'app/ActionPage/ADD_SLOT_TEXT_PROMPT_SLOT';
export const DELETE_SLOT_TEXT_PROMPT_SLOT = 'app/ActionPage/DELETE_SLOT_TEXT_PROMPT_SLOT';
export const CHANGE_ACTION_WEBHOOK_DATA = 'app/ActionPage/CHANGE_ACTION_WEBHOOK_DATA';
export const CHANGE_ACTION_WEBHOOK_PAYLOAD_TYPE = 'app/ActionPage/CHANGE_ACTION_WEBHOOK_PAYLOAD_TYPE';
export const CHANGE_ACTION_POST_FORMAT_DATA = 'app/ActionPage/CHANGE_ACTION_POST_FORMAT_DATA';
export const ADD_ACTION = 'app/ActionPage/ADD_ACTION';
export const ADD_ACTION_ERROR = 'app/ActionPage/ADD_ACTION_ERROR';
export const ADD_ACTION_SUCCESS = 'app/ActionPage/ADD_ACTION_SUCCESS';
export const UPDATE_ACTION = 'app/ActionPage/UPDATE_ACTION';
export const UPDATE_ACTION_ERROR = 'app/ActionPage/UPDATE_ACTION_ERROR';
export const UPDATE_ACTION_SUCCESS = 'app/ActionPage/UPDATE_ACTION_SUCCESS';
export const DELETE_ACTION = 'app/ActionPage/DELETE_ACTION';
export const DELETE_ACTION_ERROR = 'app/ActionPage/DELETE_ACTION_ERROR';
export const DELETE_ACTION_SUCCESS = 'app/ActionPage/DELETE_ACTION_SUCCESS';
export const ADD_HEADER_ACTION_WEBHOOK = 'app/ActionPage/ADD_HEADER_ACTION_WEBHOOK';
export const DELETE_HEADER_ACTION_WEBHOOK = 'app/ActionPage/DELETE_HEADER_ACTION_WEBHOOK';
export const CHANGE_HEADER_KEY_ACTION_WEBHOOK = 'app/ActionPage/CHANGE_HEADER_KEY_ACTION_WEBHOOK';
export const CHANGE_HEADER_VALUE_ACTION_WEBHOOK = 'app/ActionPage/CHANGE_HEADER_VALUE_ACTION_WEBHOOK';

/*
 * Keyword
 */
export const RESET_KEYWORD_DATA = 'app/KeywordsEditPage/RESET_KEYWORD_DATA';
export const LOAD_KEYWORD = 'app/KeywordsEditPage/LOAD_KEYWORD';
export const LOAD_KEYWORD_ERROR = 'app/KeywordsEditPage/LOAD_KEYWORD_ERROR';
export const LOAD_KEYWORD_SUCCESS = 'app/KeywordsEditPage/LOAD_KEYWORD_SUCCESS';
export const CREATE_KEYWORD = 'app/KeywordsEditPage/CREATE_KEYWORD';
export const CREATE_KEYWORD_ERROR = 'app/KeywordsEditPage/CREATE_KEYWORD_ERROR';
export const CREATE_KEYWORD_SUCCESS = 'app/KeywordsEditPage/CREATE_KEYWORD_SUCCESS';
export const UPDATE_KEYWORD = 'app/KeywordsEditPage/UPDATE_KEYWORD';
export const UPDATE_KEYWORD_ERROR = 'app/KeywordsEditPage/UPDATE_KEYWORD_ERROR';
export const UPDATE_KEYWORD_SUCCESS = 'app/KeywordsEditPage/UPDATE_KEYWORD_SUCCESS';
export const CHANGE_KEYWORD_DATA = 'app/KeywordsEditPage/CHANGE_KEYWORD_DATA';
export const ADD_KEYWORD_EXAMPLE = 'app/KeywordsEditPage/ADD_KEYWORD_EXAMPLE';
export const DELETE_KEYWORD_EXAMPLE = 'app/KeywordsEditPage/DELETE_KEYWORD_EXAMPLE';
export const CHANGE_EXAMPLE_SYNONYMS = 'app/KeywordsEditPage/CHANGE_EXAMPLE_SYNONYMS';
export const CHANGE_EXAMPLE_NAME = 'app/KeywordsEditPage/CHANGE_EXAMPLE_NAME';

/*
 * Category
 */
export const RESET_CATEGORY_DATA = 'app/CategoryPage/RESET_CATEGORY_DATA';
export const LOAD_CATEGORY = 'app/CategoryPage/LOAD_CATEGORY';
export const LOAD_CATEGORY_ERROR = 'app/CategoryPage/LOAD_CATEGORY_ERROR';
export const LOAD_CATEGORY_SUCCESS = 'app/CategoryPage/LOAD_CATEGORY_SUCCESS';
export const CREATE_CATEGORY = 'app/CategoryPage/CREATE_CATEGORY';
export const CREATE_CATEGORY_ERROR = 'app/CategoryPage/CREATE_CATEGORY_ERROR';
export const CREATE_CATEGORY_SUCCESS = 'app/CategoryPage/CREATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY = 'app/CategoryPage/UPDATE_CATEGORY';
export const UPDATE_CATEGORY_ERROR = 'app/CategoryPage/UPDATE_CATEGORY_ERROR';
export const UPDATE_CATEGORY_SUCCESS = 'app/CategoryPage/UPDATE_CATEGORY_SUCCESS';
export const CHANGE_CATEGORY_DATA = 'app/CategoryPage/CHANGE_CATEGORY_DATA';

/*
 * Review
 */
export const CHANGE_REVIEW_PAGE_SIZE = 'app/ReviewPage/CHANGE_REVIEW_PAGE_SIZE';
