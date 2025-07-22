# Dockerfile for Next.js
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
# 5. Generate Prisma client
# RUN npx prisma generate

# # 6. Run migration for production
# RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
