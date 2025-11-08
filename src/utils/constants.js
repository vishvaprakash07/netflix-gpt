export const LOGO = "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/30b848fabaddf7e00de9819117b0fef7/09b49349-7098-4a2b-885c-dd046f055db4/0fd8f227.png";

export const USER_AVATAR = "https://occ-0-8326-2567.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/AU-en-20251013-TRIFECTA-perspective_9f2fb586-1f80-444f-a96b-6f3260fcc86e_medium.jpg";

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" },
{ identifier: "hindi", name: "Hindi" },
{ identifier: "spanish", name: "Spanish" },
{ identifier: "telugu", name: "Telugu" }];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

