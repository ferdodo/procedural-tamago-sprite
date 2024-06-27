FROM procedural-tamago-sprite-crate

FROM node

WORKDIR /procedural-tamago-sprite/demo

COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

COPY --from=0 /procedural-tamago-sprite/crate /procedural-tamago-sprite/crate

COPY . .
RUN npm run build
CMD npm run start
