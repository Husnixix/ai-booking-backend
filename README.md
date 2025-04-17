# Le Luxe - AI Booking System Backend

## Overview
This is the backend API for Le Luxe, an AI-powered hotel booking system featuring natural language search capabilities using RAG (Retrieval-Augmented Generation) concepts.

## Features
- Natural language hotel search using RAG
- User authentication via Clerk
- Booking management
- Hotel management operations
- Vector search with MongoDB Atlas

## Setup and Installation

### Prerequisites
- MongoDB Atlas account and database
- Clerk account for authentication
- OpenAI API key
- Node.js and npm installed

### Installation Steps
1. Clone the repository:
```
git clone https://github.com/Husnixix/ai-shortlisting-backend.git
cd ai-shortlisting-backend
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with the following:
```
MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
OPENAI_API_KEY=your_openai_api_key
```

4. Start the development server:
```
npm run dev
```

## Environment Variables
- `MONGO_URI`: Your MongoDB connection string
- `CLERK_SECRET_KEY`: Your Clerk secret key for authentication
- `CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `OPENAI_API_KEY`: Your OpenAI API key for AI features

## Third-Party Services
- **MongoDB Atlas**: Sign up and create a database at [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
- **Clerk Authentication**: Set up a project at [https://clerk.com/docs](https://clerk.com/docs)
- **OpenAI API**: Get an API key at [https://platform.openai.com/docs](https://platform.openai.com/docs)

## AI Implementation (Vector Search Setup)
To enable the natural language search feature, you need to vectorize and index your hotel data in MongoDB Atlas:

1. Create a MongoDB Atlas account and set up a database
2. Index your hotel data using MongoDB Atlas Vector Search
3. For detailed instructions on setting up vector search and RAG with MongoDB, refer to:
   - [MongoDB Atlas Vector Search AI Integrations](https://www.mongodb.com/docs/atlas/atlas-vector-search/ai-integrations/langchain/)
   - [LangChain MongoDB Atlas Integration](https://python.langchain.com/docs/integrations/vectorstores/mongodb_atlas/)
   - [OpenAI Retrieval and Semantic Search](https://platform.openai.com/docs/guides/retrieval#semantic-search)

Note: The application will function without the AI features enabled, but natural language search capabilities require proper vector indexing setup.

## Frontend Integration
This backend serves the Le Luxe frontend application. Make sure to set up the frontend as well:
[Le Luxe Frontend Repository](https://github.com/Husnixix/ai-booking-frontend.git)
