const dev = {
  STRIPE_KEY: "pk_test_7arSks5Ep66s2iLXJFrwVxQf009vwoEWbZ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app2-api-dev-attachmentsbucket-8q6biy85ajei"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://51e9f1mt38.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Mj2Iv2L2a",
    APP_CLIENT_ID: "2ajndpalir1mhvctk43spger2p",
    IDENTITY_POOL_ID: "us-east-1:e44ad3a4-fbe6-42f1-898b-27fa7ead019d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_7arSks5Ep66s2iLXJFrwVxQf009vwoEWbZ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app2-api-prod-attachmentsbucket-ybt7t5lc117c"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5frloguqwf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yyaqQuCZN",
    APP_CLIENT_ID: "31qj0mn2en8pfdktcgc6hu3gla",
    IDENTITY_POOL_ID: "us-east-1:1d6b8c94-edb6-4688-9d6f-c3995b9ffdc0"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
