export const config = {
  "default": {
    "host": process.env.POSTGRES_HOST,
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": "default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
