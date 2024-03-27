################################################
# Build image
################################################
FROM public.ecr.aws/lambda/nodejs:20 as builder

RUN npm i -g yarn

WORKDIR /usr/app

COPY package.json yarn.lock index.ts  ./

RUN yarn install
RUN yarn build

################################################
# Runtime image
################################################
FROM public.ecr.aws/lambda/nodejs:20

# Install clamav dependecies
RUN dnf install -y clamav clamav-update

WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /usr/app/dist/* ./

CMD ["index.default"]
