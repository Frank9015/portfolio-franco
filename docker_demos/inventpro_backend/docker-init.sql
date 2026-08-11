-- Create the inventpro schema and user
CREATE SCHEMA IF NOT EXISTS inventpro_user;

-- Grant privileges
GRANT ALL ON SCHEMA inventpro_user TO inventpro_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA inventpro_user TO inventpro_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA inventpro_user GRANT ALL ON TABLES TO inventpro_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA inventpro_user GRANT ALL ON SEQUENCES TO inventpro_user;
