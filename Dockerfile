

RUN git clone https://github.com/Opaksfire/FIRE-MD

WORKDIR main

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
