# Usa o node só pra build
FROM node:18 AS builder

WORKDIR /app

# Da o npm install
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Faz o build
RUN npm run build

# Agora usa o nginx pro servidor em si
FROM nginx:stable-alpine

# Deleta o padrao do nginx e leva o que subiu no dist
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Inicia o servidor
CMD ["nginx", "-g", "daemon off;"]