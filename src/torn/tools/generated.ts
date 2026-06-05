export type TornToolParam = {
  name: string;
  in: "path" | "query";
  required: boolean;
  description?: string;
};

export type TornToolDefinition = {
  name: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  category: string;
  params: TornToolParam[];
};

export const GENERATED_FROM = "https://www.torn.com/swagger/openapi.json";
export const GENERATED_AT = "2026-06-05T16:32:36.998Z";

export const TOOL_DEFINITIONS: TornToolDefinition[] = [
  {
    "name": "horizon_torn_getChainReport",
    "description": "Get a chain report",
    "method": "GET",
    "path": "/faction/{chainId}/chainreport",
    "category": "Faction",
    "params": [
      {
        "name": "chainId",
        "in": "path",
        "required": true,
        "description": "Chain id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompaniesList",
    "description": "Get a list of companies for a specific company type",
    "method": "GET",
    "path": "/company/{typeId}/companies",
    "category": "Company",
    "params": [
      {
        "name": "typeId",
        "in": "path",
        "required": true,
        "description": "Company type id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompaniesSearch",
    "description": "Search companies by name or other criteria",
    "method": "GET",
    "path": "/company/search",
    "category": "Company",
    "params": [
      {
        "name": "name",
        "in": "query",
        "required": false,
        "description": "Name  to search for."
      },
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "A filtering query parameter allowing a comma-separated list of filters. <br>\n *  Each filter can be one of the following:\n *  Fixed options: `recruiting`, `notRecruiting`\n *  Dynamic options: `fieldName`+`condition`+`number`. Each dynamic filter is made out of 3 parts separated by colon `:`:\n *  * `fieldName` is one of: `id`, `type`, `daysOld`, `rating`, `dailyIncome`, `weeklyIncome`, `dailyCustomers`, `weeklyCustomers`\n *  * `condition` is one of: `=`, `!=`, `<`, `<=`, `>=`, `>`, `Equal`, `NotEqual`, `Less`, `LessOrEqual`, `GreaterOrEqual`, `Greater`\n *  * `number`: any integer value\n *  Examples: `filters=recruiting`, `filters=weeklyIncome:>=:20000,id:<:1000,notRecruiting`, `filters=type:Equal:10,rating:=:10,dailyIncome:<=:6666666`"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompaniesSnapshot",
    "description": "Get daily companies snapshot CSV",
    "method": "GET",
    "path": "/company/snapshot",
    "category": "Company",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompanyEmployees",
    "description": "Get a company's employees",
    "method": "GET",
    "path": "/company/{id}/employees",
    "category": "Company",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Company id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompanyGeneric",
    "description": "Get any Company selection",
    "method": "GET",
    "path": "/company",
    "category": "Company",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "legacy",
        "in": "query",
        "required": false,
        "description": "Legacy selection names for which you want or expect API v1 response"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Selection category"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompanyLookup",
    "description": "Requires public access key. <br>",
    "method": "GET",
    "path": "/company/lookup",
    "category": "Company",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompanyProfile",
    "description": "Get a company's profile",
    "method": "GET",
    "path": "/company/{id}/profile",
    "category": "Company",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Company id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getCompanyTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/company/timestamp",
    "category": "Company",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionBasicInformation",
    "description": "Get a faction's basic details",
    "method": "GET",
    "path": "/faction/{id}/basic",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionChain",
    "description": "Get a faction's current chain",
    "method": "GET",
    "path": "/faction/{id}/chain",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionCompletedChains",
    "description": "Get a list of a faction's completed chains",
    "method": "GET",
    "path": "/faction/{id}/chains",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionGeneric",
    "description": "Get any Faction selection",
    "method": "GET",
    "path": "/faction",
    "category": "Faction",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "legacy",
        "in": "query",
        "required": false,
        "description": "Legacy selection names for which you want or expect API v1 response"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Selection category"
      },
      {
        "name": "stat",
        "in": "query",
        "required": false,
        "description": "Stat category"
      },
      {
        "name": "filters",
        "in": "query",
        "required": false
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionHoF",
    "description": "Get a faction's hall of fame rankings.",
    "method": "GET",
    "path": "/faction/{id}/hof",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionLookup",
    "description": "Requires public access key. <br>",
    "method": "GET",
    "path": "/faction/lookup",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionMembers",
    "description": "Get a list of a faction's members",
    "method": "GET",
    "path": "/faction/{id}/members",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionRackets",
    "description": "Get a list of current rackets",
    "method": "GET",
    "path": "/faction/rackets",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionRaidsHistory",
    "description": "Get a faction's raids history",
    "method": "GET",
    "path": "/faction/{id}/raids",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionRankedWarsHistory",
    "description": "Get a faction's ranked wars history",
    "method": "GET",
    "path": "/faction/{id}/rankedwars",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionSearch",
    "description": "Search factions by name or other criteria",
    "method": "GET",
    "path": "/faction/search",
    "category": "Faction",
    "params": [
      {
        "name": "name",
        "in": "query",
        "required": false,
        "description": "Name  to search for."
      },
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "A filtering query parameter allowing a comma-separated list of filters. <br>\n * Each filter can be one of the following:\n * Fixed options: `destroyed`, `notDestroyed`, `recruiting`, `notRecruiting`\n * Dynamic options: `fieldName`+`condition`+`number`. Each dynamic filter is made out of 3 parts separated by colon `:`:\n * * `fieldName` is one of: `id`, `respect`, `members`, `membersMax`\n * * `condition` is one of: `=`, `!=`, `<`, `<=`, `>=`, `>`, `Equal`, `NotEqual`, `Less`, `LessOrEqual`, `GreaterOrEqual`, `Greater`\n * * `number`: any integer value\n * Examples: `filters=destroyed`, `filters=notDestroyed,recruiting`, `filters=respect:>=:20000,id:<:100,notRecruiting`"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionTerritory",
    "description": "Get a list of a faction's territories",
    "method": "GET",
    "path": "/faction/{id}/territory",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionTerritoryWarsHistory",
    "description": "Get a faction's territory wars history",
    "method": "GET",
    "path": "/faction/{id}/territorywars",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/faction/timestamp",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getFactionWars",
    "description": "Get a faction's wars & pacts details",
    "method": "GET",
    "path": "/faction/{id}/wars",
    "category": "Faction",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Faction id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumAllThreads",
    "description": "Get threads across all forum categories",
    "method": "GET",
    "path": "/forum/threads",
    "category": "Forum",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumCategories",
    "description": "Get publicly available forum categories",
    "method": "GET",
    "path": "/forum/categories",
    "category": "Forum",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumGeneric",
    "description": "Get any Forum selection",
    "method": "GET",
    "path": "/forum",
    "category": "Forum",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumLookup",
    "description": "Get all available forum selections",
    "method": "GET",
    "path": "/forum/lookup",
    "category": "Forum",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumThread",
    "description": "Get specific thread details",
    "method": "GET",
    "path": "/forum/{threadId}/thread",
    "category": "Forum",
    "params": [
      {
        "name": "threadId",
        "in": "path",
        "required": true,
        "description": "Thread id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumThreadPosts",
    "description": "Get specific forum thread posts",
    "method": "GET",
    "path": "/forum/{threadId}/posts",
    "category": "Forum",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "threadId",
        "in": "path",
        "required": true,
        "description": "Thread id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumThreads",
    "description": "Get threads for specific public forum category or categories",
    "method": "GET",
    "path": "/forum/{categoryIds}/threads",
    "category": "Forum",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "categoryIds",
        "in": "path",
        "required": true,
        "description": "Category id or a list of category ids (comma separated)"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getForumTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/forum/timestamp",
    "category": "Forum",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getKeyGeneric",
    "description": "Get any Key selection",
    "method": "GET",
    "path": "/key",
    "category": "Key",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getKeyInfo",
    "description": "Get current key info",
    "method": "GET",
    "path": "/key/info",
    "category": "Key",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getKeyLog",
    "description": "Get current key log history",
    "method": "GET",
    "path": "/key/log",
    "category": "Key",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketAuctionHouse",
    "description": "Get auction house listings",
    "method": "GET",
    "path": "/market/auctionhouse",
    "category": "Market",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketAuctionHouseItem",
    "description": "Get specific item auction house listings",
    "method": "GET",
    "path": "/market/{id}/auctionhouse",
    "category": "Market",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Item id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketAuctionHouseListing",
    "description": "Get specific item auction house listings",
    "method": "GET",
    "path": "/market/{id}/auctionhouselisting",
    "category": "Market",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Listing id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketBazaar",
    "description": "Get bazaar directory",
    "method": "GET",
    "path": "/market/bazaar",
    "category": "Market",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of specialized bazaars returned"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketBazaarItem",
    "description": "Get item specialized bazaar directory",
    "method": "GET",
    "path": "/market/{id}/bazaar",
    "category": "Market",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Item id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketGeneric",
    "description": "Get any Market selection",
    "method": "GET",
    "path": "/market",
    "category": "Market",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "legacy",
        "in": "query",
        "required": false,
        "description": "Legacy selection names for which you want or expect API v1 response"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of specialized bazaars returned"
      },
      {
        "name": "bonus",
        "in": "query",
        "required": false,
        "description": "Used to filter weapons with a specific bonus"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Direction to sort rows in"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketItemMarketItem",
    "description": "Get item market listings",
    "method": "GET",
    "path": "/market/{id}/itemmarket",
    "category": "Market",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Item id"
      },
      {
        "name": "bonus",
        "in": "query",
        "required": false,
        "description": "Used to filter weapons with a specific bonus."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketLookup",
    "description": "Get all available market selections",
    "method": "GET",
    "path": "/market/lookup",
    "category": "Market",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketProperties",
    "description": "Get properties market listings",
    "method": "GET",
    "path": "/market/{propertyTypeId}/properties",
    "category": "Market",
    "params": [
      {
        "name": "propertyTypeId",
        "in": "path",
        "required": true,
        "description": "Property type id"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketPropertiesRental",
    "description": "Get properties rental listings",
    "method": "GET",
    "path": "/market/{propertyTypeId}/rentals",
    "category": "Market",
    "params": [
      {
        "name": "propertyTypeId",
        "in": "path",
        "required": true,
        "description": "Property type id"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMarketTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/market/timestamp",
    "category": "Market",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyAmmo",
    "description": "Get your ammo information",
    "method": "GET",
    "path": "/user/ammo",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyAttacks",
    "description": "Get your detailed attacks",
    "method": "GET",
    "path": "/user/attacks",
    "category": "User",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyAttacksSimplified",
    "description": "Get your simplified attacks",
    "method": "GET",
    "path": "/user/attacksfull",
    "category": "User",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyAvailableOrganizedCrimes",
    "description": "Get available slots for organized crimes with status 'Recruiting'",
    "method": "GET",
    "path": "/user/organizedcrimes",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyBars",
    "description": "Get your bars information",
    "method": "GET",
    "path": "/user/bars",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyBasicInformation",
    "description": "Get your basic profile information",
    "method": "GET",
    "path": "/user/basic",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyBattlestats",
    "description": "Get your battlestats",
    "method": "GET",
    "path": "/user/battlestats",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyBounties",
    "description": "Get bounties placed on you",
    "method": "GET",
    "path": "/user/bounties",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCalendarTime",
    "description": "Get your calendar events start time",
    "method": "GET",
    "path": "/user/calendar",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCasinoStreak",
    "description": "Get your casino streak & tokens",
    "method": "GET",
    "path": "/user/casino",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompanyApplications",
    "description": "Get your company's applications",
    "method": "GET",
    "path": "/company/applications",
    "category": "Company",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompanyEmployees",
    "description": "Get my company's employees",
    "method": "GET",
    "path": "/company/employees",
    "category": "Company",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompanyNews",
    "description": "Get your company's news details",
    "method": "GET",
    "path": "/company/news",
    "category": "Company",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "News category type"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompanyProfile",
    "description": "Get my company's profile",
    "method": "GET",
    "path": "/company/profile",
    "category": "Company",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompanyStock",
    "description": "Get your company's stock",
    "method": "GET",
    "path": "/company/stock",
    "category": "Company",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCompetitionInfo",
    "description": "Get your competition information",
    "method": "GET",
    "path": "/user/competition",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyContactsList",
    "description": "Get your friends, enemies or targets list",
    "method": "GET",
    "path": "/user/list",
    "category": "User",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "Select list type"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sort rows from newest to oldest<br>Default ordering is ascending"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCooldowns",
    "description": "Get your cooldowns information",
    "method": "GET",
    "path": "/user/cooldowns",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyCrimes",
    "description": "Get your crime statistics",
    "method": "GET",
    "path": "/user/{crimeId}/crimes",
    "category": "User",
    "params": [
      {
        "name": "crimeId",
        "in": "path",
        "required": true,
        "description": "Crime id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyDetailedTrade",
    "description": "Get your detailed trade",
    "method": "GET",
    "path": "/user/{tradeId}/trade",
    "category": "User",
    "params": [
      {
        "name": "tradeId",
        "in": "path",
        "required": true,
        "description": "Trade id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyDiscord",
    "description": "Get your discord information",
    "method": "GET",
    "path": "/user/discord",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyEducation",
    "description": "Get your education information",
    "method": "GET",
    "path": "/user/education",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyEnlistedCars",
    "description": "Get your enlisted cars",
    "method": "GET",
    "path": "/user/enlistedcars",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyEquipment",
    "description": "Get your equipment & clothing",
    "method": "GET",
    "path": "/user/equipment",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyEvents",
    "description": "Get your events",
    "method": "GET",
    "path": "/user/events",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFaction",
    "description": "Get your faction information",
    "method": "GET",
    "path": "/user/faction",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionApplications",
    "description": "Get your faction's applications",
    "method": "GET",
    "path": "/faction/applications",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionAttacks",
    "description": "Get your faction's detailed attacks",
    "method": "GET",
    "path": "/faction/attacks",
    "category": "Faction",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionAttacksSimplified",
    "description": "Get your faction's simplified attacks",
    "method": "GET",
    "path": "/faction/attacksfull",
    "category": "Faction",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionBalance",
    "description": "Get your faction's & member's balance details",
    "method": "GET",
    "path": "/faction/balance",
    "category": "Faction",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "By default, this selection will return only current faction's member balances, and the option 'all' will return all current members balances + additionally those of ex-members which do have money or points on their balance."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionBasicInformation",
    "description": "Get your faction's basic details",
    "method": "GET",
    "path": "/faction/basic",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionChain",
    "description": "Get your faction's current chain",
    "method": "GET",
    "path": "/faction/chain",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionCompletedChains",
    "description": "Get a list of your faction's completed chains",
    "method": "GET",
    "path": "/faction/chains",
    "category": "Faction",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionContributors",
    "description": "Get your faction's challenge contributors",
    "method": "GET",
    "path": "/faction/contributors",
    "category": "Faction",
    "params": [
      {
        "name": "stat",
        "in": "query",
        "required": true,
        "description": "Get contributors for this field."
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "By default, this selection will return only current faction's member contributions, and the option 'all' will return all contributors."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionHoF",
    "description": "Get your faction's hall of fame rankings.",
    "method": "GET",
    "path": "/faction/hof",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionLatestChainReport",
    "description": "Get your faction's latest chain report",
    "method": "GET",
    "path": "/faction/chainreport",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionMembers",
    "description": "Get a list of your faction's members",
    "method": "GET",
    "path": "/faction/members",
    "category": "Faction",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionNews",
    "description": "Get your faction's news details",
    "method": "GET",
    "path": "/faction/news",
    "category": "Faction",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "News category type"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionOrganizedCrime",
    "description": "Get a specific organized crime",
    "method": "GET",
    "path": "/faction/{crimeId}/crime",
    "category": "Faction",
    "params": [
      {
        "name": "crimeId",
        "in": "path",
        "required": true,
        "description": "Crime id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionOrganizedCrimes",
    "description": "Get your faction's organized crimes",
    "method": "GET",
    "path": "/faction/crimes",
    "category": "Faction",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of organized crimes returned. Category 'available' includes both 'recruiting' & 'planning', and category 'completed' includes both 'successful' & 'failure'<br>Default category is 'all'."
      },
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to set this parameter to specify a field used for the sort, from & to query parameters. If not specified, the field will default to the category sorting as described above."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionPositions",
    "description": "Get your faction's positions details",
    "method": "GET",
    "path": "/faction/positions",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionRaidsHistory",
    "description": "Get raids history for your faction",
    "method": "GET",
    "path": "/faction/raids",
    "category": "Faction",
    "params": [
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionRankedWarsHistory",
    "description": "Get ranked wars history for your faction",
    "method": "GET",
    "path": "/faction/rankedwars",
    "category": "Faction",
    "params": [
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionReports",
    "description": "Get faction reports",
    "method": "GET",
    "path": "/faction/reports",
    "category": "Faction",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Used to filter reports with a specific type."
      },
      {
        "name": "target",
        "in": "query",
        "required": false,
        "description": "Get reports for a specific player by passing their player ID."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionRevives",
    "description": "Get your faction's detailed revives",
    "method": "GET",
    "path": "/faction/revives",
    "category": "Faction",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionRevivesSimplified",
    "description": "Get your faction's simplified revives",
    "method": "GET",
    "path": "/faction/revivesFull",
    "category": "Faction",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionStats",
    "description": "Get your faction's challenges stats",
    "method": "GET",
    "path": "/faction/stats",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionTerritory",
    "description": "Get a list of your faction's territories",
    "method": "GET",
    "path": "/faction/territory",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionTerritoryWarsHistory",
    "description": "Get territory wars history for your faction",
    "method": "GET",
    "path": "/faction/territorywars",
    "category": "Faction",
    "params": [
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionUpgrades",
    "description": "Get your faction's upgrades",
    "method": "GET",
    "path": "/faction/upgrades",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyFactionWars",
    "description": "Get your faction's wars & pacts details",
    "method": "GET",
    "path": "/faction/wars",
    "category": "Faction",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyForumFeed",
    "description": "Get updates on your threads and posts",
    "method": "GET",
    "path": "/user/forumfeed",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyForumFriendsUpdates",
    "description": "Get updates on your friends' activity",
    "method": "GET",
    "path": "/user/forumfriends",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyForumPosts",
    "description": "Get your posts",
    "method": "GET",
    "path": "/user/forumposts",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyForumSubscribedThreads",
    "description": "Get updates on threads you subscribed to",
    "method": "GET",
    "path": "/user/forumsubscribedthreads",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyForumThreads",
    "description": "Get your threads",
    "method": "GET",
    "path": "/user/forumthreads",
    "category": "User",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyHoF",
    "description": "Get your hall of fame rankings",
    "method": "GET",
    "path": "/user/hof",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyHonors",
    "description": "Get your achieved honors",
    "method": "GET",
    "path": "/user/honors",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyIcons",
    "description": "Get your icons information",
    "method": "GET",
    "path": "/user/icons",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyInventory",
    "description": "Get your inventory",
    "method": "GET",
    "path": "/user/inventory",
    "category": "User",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Items category"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyItemMarketListings",
    "description": "Get your item market listings",
    "method": "GET",
    "path": "/user/itemmarket",
    "category": "User",
    "params": [
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyItemModsInformation",
    "description": "Get your information about available item mods",
    "method": "GET",
    "path": "/user/itemmods",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyJob",
    "description": "Get your job information",
    "method": "GET",
    "path": "/user/job",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyJobPoints",
    "description": "Get your jobpoints",
    "method": "GET",
    "path": "/user/jobpoints",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyJobRanks",
    "description": "Get your starter job positions",
    "method": "GET",
    "path": "/user/jobranks",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyLogs",
    "description": "Get your logs",
    "method": "GET",
    "path": "/user/log",
    "category": "User",
    "params": [
      {
        "name": "log",
        "in": "query",
        "required": false,
        "description": "Log ids, comma separated, e.g. 105,4900,4905"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Log category id"
      },
      {
        "name": "target",
        "in": "query",
        "required": false,
        "description": "Get logs where you interacted with a specific player by passing their player ID."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Full).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyMedals",
    "description": "Get your achieved medals",
    "method": "GET",
    "path": "/user/medals",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyMerits",
    "description": "Get your merits",
    "method": "GET",
    "path": "/user/merits",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyMessages",
    "description": "Get your messages",
    "method": "GET",
    "path": "/user/messages",
    "category": "User",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyMissions",
    "description": "Get your current missions information",
    "method": "GET",
    "path": "/user/missions",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyMoney",
    "description": "Get your current wealth",
    "method": "GET",
    "path": "/user/money",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyNewEvents",
    "description": "Get your unseen events",
    "method": "GET",
    "path": "/user/newevents",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyNewMessages",
    "description": "Get your unseen messages",
    "method": "GET",
    "path": "/user/newmessages",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyNotifications",
    "description": "Get your notifications",
    "method": "GET",
    "path": "/user/notifications",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyOrganizedCrime",
    "description": "Get your current ongoing organized crime",
    "method": "GET",
    "path": "/user/organizedcrime",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyPersonalStats",
    "description": "Get your personal stats",
    "method": "GET",
    "path": "/user/personalstats",
    "category": "User",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Stats category. Required unless requesting specific stats via 'stat' query parameter"
      },
      {
        "name": "stat",
        "in": "query",
        "required": false,
        "description": "Stat names (10 maximum). Used to fetch historical stat values"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Returns stats until this timestamp (converted to nearest date)."
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyProfile",
    "description": "Get your own profile",
    "method": "GET",
    "path": "/user/profile",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyProperties",
    "description": "Get your own properties",
    "method": "GET",
    "path": "/user/properties",
    "category": "User",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to filter properties by the key owner or their spouse."
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyProperty",
    "description": "Get your current property",
    "method": "GET",
    "path": "/user/property",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyRaces",
    "description": "Get user races",
    "method": "GET",
    "path": "/user/races",
    "category": "User",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of races returned"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyRacingRecords",
    "description": "Get your current racing records",
    "method": "GET",
    "path": "/user/racingrecords",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyRefills",
    "description": "Get your refills information",
    "method": "GET",
    "path": "/user/refills",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyReports",
    "description": "Get your reports",
    "method": "GET",
    "path": "/user/reports",
    "category": "User",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Used to filter reports with a specific type."
      },
      {
        "name": "target",
        "in": "query",
        "required": false,
        "description": "Get reports for a specific player by passing their player ID."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyRevives",
    "description": "Get your detailed revives",
    "method": "GET",
    "path": "/user/revives",
    "category": "User",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyRevivesSimplified",
    "description": "Get your simplified revives",
    "method": "GET",
    "path": "/user/revivesFull",
    "category": "User",
    "params": [
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives.\nIt's also possible to combine this with 'idFilter'. This filter allows using from/to to filter by ids instead of timestamps."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMySkills",
    "description": "Get your skills",
    "method": "GET",
    "path": "/user/skills",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyStocks",
    "description": "Get your stocks",
    "method": "GET",
    "path": "/user/stocks",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyTrades",
    "description": "Get your trades",
    "method": "GET",
    "path": "/user/trades",
    "category": "User",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of trades returned"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Limited).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyTravelInformation",
    "description": "Get your travel information",
    "method": "GET",
    "path": "/user/travel",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyVirusCodingInformation",
    "description": "Get your virus coding information",
    "method": "GET",
    "path": "/user/virus",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyWeaponExp",
    "description": "Get your weapon experience information",
    "method": "GET",
    "path": "/user/weaponexp",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getMyWorkstats",
    "description": "Get your working stats",
    "method": "GET",
    "path": "/user/workstats",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Minimal).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getProperty",
    "description": "Get a specific property",
    "method": "GET",
    "path": "/property/{id}/property",
    "category": "Property",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Property id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getPropertyGeneric",
    "description": "Get any property selection",
    "method": "GET",
    "path": "/property",
    "category": "Property",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": true,
        "description": "Property id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getPropertyLookup",
    "description": "Get all available property selections",
    "method": "GET",
    "path": "/property/lookup",
    "category": "Property",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getPropertyTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/property/timestamp",
    "category": "Property",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingCars",
    "description": "Get cars and their racing stats",
    "method": "GET",
    "path": "/racing/cars",
    "category": "Racing",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingCarUpgrades",
    "description": "Get all possible car upgrades",
    "method": "GET",
    "path": "/racing/carupgrades",
    "category": "Racing",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingGeneric",
    "description": "Get any Racing selection",
    "method": "GET",
    "path": "/racing",
    "category": "Racing",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Selection category"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingLookup",
    "description": "Get all available racing selections",
    "method": "GET",
    "path": "/racing/lookup",
    "category": "Racing",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingRaceDetails",
    "description": "Get specific race details",
    "method": "GET",
    "path": "/racing/{raceId}/race",
    "category": "Racing",
    "params": [
      {
        "name": "raceId",
        "in": "path",
        "required": true,
        "description": "Race id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingRaces",
    "description": "Get races",
    "method": "GET",
    "path": "/racing/races",
    "category": "Racing",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Category of races returned"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/racing/timestamp",
    "category": "Racing",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingTrackRecords",
    "description": "Get track records",
    "method": "GET",
    "path": "/racing/{trackId}/records",
    "category": "Racing",
    "params": [
      {
        "name": "trackId",
        "in": "path",
        "required": true,
        "description": "Track id"
      },
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "Car class"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRacingTracks",
    "description": "Get race tracks and descriptions",
    "method": "GET",
    "path": "/racing/tracks",
    "category": "Racing",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRaidReport",
    "description": "Get raid war details",
    "method": "GET",
    "path": "/faction/{raidWarId}/raidreport",
    "category": "Faction",
    "params": [
      {
        "name": "raidWarId",
        "in": "path",
        "required": true,
        "description": "Raid war id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getRankedWarReport",
    "description": "Get ranked war details",
    "method": "GET",
    "path": "/faction/{rankedWarId}/rankedwarreport",
    "category": "Faction",
    "params": [
      {
        "name": "rankedWarId",
        "in": "path",
        "required": true,
        "description": "Ranked war id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getSpecificTornStock",
    "description": "Get specific stock with chart history",
    "method": "GET",
    "path": "/torn/{stockId}/stocks",
    "category": "Torn",
    "params": [
      {
        "name": "stockId",
        "in": "path",
        "required": true,
        "description": "Stock id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTerritoryOwnership",
    "description": "Get a list territory ownership",
    "method": "GET",
    "path": "/faction/territoryownership",
    "category": "Faction",
    "params": [
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTerritoryWarReport",
    "description": "Get territory war details",
    "method": "GET",
    "path": "/faction/{territoryWarId}/territorywarreport",
    "category": "Faction",
    "params": [
      {
        "name": "territoryWarId",
        "in": "path",
        "required": true,
        "description": "Territory war id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornAttackLog",
    "description": "Get attack log details",
    "method": "GET",
    "path": "/torn/attacklog",
    "category": "Torn",
    "params": [
      {
        "name": "log",
        "in": "query",
        "required": true,
        "description": "Code of the attack log. E.g. d51ad4fe6be884b309b142e2d1d4f807"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornBounties",
    "description": "Get bounties",
    "method": "GET",
    "path": "/torn/bounties",
    "category": "Torn",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornCalendar",
    "description": "Get calendar information",
    "method": "GET",
    "path": "/torn/calendar",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornCrimes",
    "description": "Get crimes information",
    "method": "GET",
    "path": "/torn/crimes",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornEducation",
    "description": "Get education information",
    "method": "GET",
    "path": "/torn/education",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornElimination",
    "description": "Get current standings for all elimination teams",
    "method": "GET",
    "path": "/torn/elimination",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornEliminationTeam",
    "description": "Get players in a specific elimination team",
    "method": "GET",
    "path": "/torn/{id}/eliminationteam",
    "category": "Torn",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Elimination team id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornFactionHoF",
    "description": "Get faction hall of fame positions for a specific category",
    "method": "GET",
    "path": "/torn/factionhof",
    "category": "Torn",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "Leaderboards category"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornFactionTree",
    "description": "Get full faction tree",
    "method": "GET",
    "path": "/torn/factiontree",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornGeneric",
    "description": "Get any Torn selection",
    "method": "GET",
    "path": "/torn",
    "category": "Torn",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "legacy",
        "in": "query",
        "required": false,
        "description": "Legacy selection names for which you want or expect API v1 response"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Selection category"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornHoF",
    "description": "Get player hall of fame positions for a specific category",
    "method": "GET",
    "path": "/torn/hof",
    "category": "Torn",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "cat",
        "in": "query",
        "required": true,
        "description": "Leaderboards category"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornHonors",
    "description": "Get all honors",
    "method": "GET",
    "path": "/torn/honors",
    "category": "Torn",
    "params": [
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornHonorsSpecific",
    "description": "Get specific honors",
    "method": "GET",
    "path": "/torn/{ids}/honors",
    "category": "Torn",
    "params": [
      {
        "name": "ids",
        "in": "path",
        "required": true,
        "description": "Honor id or a list of honor ids (comma separated)"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornItemAmmo",
    "description": "Get information about ammo",
    "method": "GET",
    "path": "/torn/itemammo",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornItemDetails",
    "description": "Get information about a specific item",
    "method": "GET",
    "path": "/torn/{id}/itemdetails",
    "category": "Torn",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "Item uid"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornItemMods",
    "description": "Get information about weapon upgrades",
    "method": "GET",
    "path": "/torn/itemmods",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornItems",
    "description": "Get information about items",
    "method": "GET",
    "path": "/torn/items",
    "category": "Torn",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Item category type"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sort rows from newest to oldest<br>Default ordering is ascending"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornItemsSpecific",
    "description": "Get information about items",
    "method": "GET",
    "path": "/torn/{ids}/items",
    "category": "Torn",
    "params": [
      {
        "name": "ids",
        "in": "path",
        "required": true,
        "description": "Item id or a list of item ids (comma separated)"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sort rows from newest to oldest<br>Default ordering is ascending"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornLogCategories",
    "description": "Get available log categories",
    "method": "GET",
    "path": "/torn/logcategories",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornLogTypes",
    "description": "Get all available log ids",
    "method": "GET",
    "path": "/torn/logtypes",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornLogTypesSpecific",
    "description": "Get available log ids for a specific log category",
    "method": "GET",
    "path": "/torn/{logCategoryId}/logtypes",
    "category": "Torn",
    "params": [
      {
        "name": "logCategoryId",
        "in": "path",
        "required": true,
        "description": "Log category id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornLookup",
    "description": "Get all available torn selections",
    "method": "GET",
    "path": "/torn/lookup",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornMedals",
    "description": "Get all medals",
    "method": "GET",
    "path": "/torn/medals",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornMedalsSpecific",
    "description": "Get specific medals",
    "method": "GET",
    "path": "/torn/{ids}/medals",
    "category": "Torn",
    "params": [
      {
        "name": "ids",
        "in": "path",
        "required": true,
        "description": "Medal id or a list of medal ids (comma separated)"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornMerits",
    "description": "Get all merits",
    "method": "GET",
    "path": "/torn/merits",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornOrganizedCrimes",
    "description": "Get organized crimes information",
    "method": "GET",
    "path": "/torn/organizedcrimes",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornProperties",
    "description": "Get properties details",
    "method": "GET",
    "path": "/torn/properties",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornStocks",
    "description": "Get all stocks",
    "method": "GET",
    "path": "/torn/stocks",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornSubcrimes",
    "description": "Get Subcrimes information",
    "method": "GET",
    "path": "/torn/{crimeId}/subcrimes",
    "category": "Torn",
    "params": [
      {
        "name": "crimeId",
        "in": "path",
        "required": true,
        "description": "Crime id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornTerritory",
    "description": "Get territory details",
    "method": "GET",
    "path": "/torn/territory",
    "category": "Torn",
    "params": [
      {
        "name": "ids",
        "in": "query",
        "required": false,
        "description": "Specific territory id or a list of territory ids (comma separated)"
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getTornTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/torn/timestamp",
    "category": "Torn",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserBasicInformation",
    "description": "Get basic profile information for a specific user",
    "method": "GET",
    "path": "/user/{id}/basic",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserBounties",
    "description": "Get bounties placed on a specific user",
    "method": "GET",
    "path": "/user/{id}/bounties",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserCompetitionInfo",
    "description": "Get competition information for a specific player",
    "method": "GET",
    "path": "/user/{id}/competition",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserDiscord",
    "description": "Get discord information for a specific user",
    "method": "GET",
    "path": "/user/{id}/discord",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserFaction",
    "description": "Get faction information for a specific player",
    "method": "GET",
    "path": "/user/{id}/faction",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserForumPosts",
    "description": "Get posts for a specific player",
    "method": "GET",
    "path": "/user/{id}/forumposts",
    "category": "User",
    "params": [
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserForumThreads",
    "description": "Get threads for a specific player",
    "method": "GET",
    "path": "/user/{id}/forumthreads",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserGeneric",
    "description": "Get any User selection",
    "method": "GET",
    "path": "/user",
    "category": "User",
    "params": [
      {
        "name": "selections",
        "in": "query",
        "required": false,
        "description": "Selection names"
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "description": "selection id"
      },
      {
        "name": "legacy",
        "in": "query",
        "required": false,
        "description": "Legacy selection names for which you want or expect API v1 response"
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": "Selection category. Can belong to one of the specified types."
      },
      {
        "name": "stat",
        "in": "query",
        "required": false,
        "description": "Selection stat"
      },
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to only get incoming or outgoing attacks / revives. If not specified, this selection will return both incoming and outgoing attacks / revives."
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserHoF",
    "description": "Get hall of fame rankings for a specific player",
    "method": "GET",
    "path": "/user/{id}/hof",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserIcons",
    "description": "Get icons information for a specific player",
    "method": "GET",
    "path": "/user/{id}/icons",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserJob",
    "description": "Get job information for a specific player",
    "method": "GET",
    "path": "/user/{id}/job",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserLookup",
    "description": "Get all available user selections",
    "method": "GET",
    "path": "/user/lookup",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserPersonalStats",
    "description": "Get a player's personal stats",
    "method": "GET",
    "path": "/user/{id}/personalstats",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "cat",
        "in": "query",
        "required": false,
        "description": ""
      },
      {
        "name": "stat",
        "in": "query",
        "required": false,
        "description": "Stat names (10 maximum). Used to fetch historical stat values"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Returns stats until this timestamp (converted to nearest date)."
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserProfile",
    "description": "Get profile information for a specific player",
    "method": "GET",
    "path": "/user/{id}/profile",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "striptags",
        "in": "query",
        "required": false,
        "description": "Determines if fields include HTML or not ('Hospitalized by <a href=...>user</a>' vs 'Hospitalized by user')."
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserProperties",
    "description": "Get specific user's properties",
    "method": "GET",
    "path": "/user/{id}/properties",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "filters",
        "in": "query",
        "required": false,
        "description": "It's possible to use this query parameter to filter properties by the key owner or their spouse."
      },
      {
        "name": "offset",
        "in": "query",
        "required": false
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserProperty",
    "description": "Get specific user's property",
    "method": "GET",
    "path": "/user/{id}/property",
    "category": "User",
    "params": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "description": "User id or user discord id"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getUserTimestamp",
    "description": "Get current server time",
    "method": "GET",
    "path": "/user/timestamp",
    "category": "User",
    "params": [
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  },
  {
    "name": "horizon_torn_getWarfare",
    "description": "Get faction warfare",
    "method": "GET",
    "path": "/faction/warfare",
    "category": "Faction",
    "params": [
      {
        "name": "cat",
        "in": "query",
        "required": true
      },
      {
        "name": "limit",
        "in": "query",
        "required": false
      },
      {
        "name": "sort",
        "in": "query",
        "required": false,
        "description": "Sorted by the greatest timestamps"
      },
      {
        "name": "from",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the lower limit for the data returned. Data returned will be after this time"
      },
      {
        "name": "to",
        "in": "query",
        "required": false,
        "description": "Timestamp that sets the upper limit for the data returned. Data returned will be up to and including this time"
      },
      {
        "name": "timestamp",
        "in": "query",
        "required": false,
        "description": "Timestamp to bypass cache or get the data in specific point in time"
      },
      {
        "name": "comment",
        "in": "query",
        "required": false,
        "description": "Comment for your tool/service/bot/website to be visible in the logs."
      },
      {
        "name": "key",
        "in": "query",
        "required": false,
        "description": "API key (Public).<br>It's not required to use this parameter when passing the API key via the Authorization header."
      }
    ]
  }
];
