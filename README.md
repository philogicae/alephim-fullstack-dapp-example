# Aleph.im Fullstack Dapp Example

## Getting Started

This repository is a showcase for [Aleph.im](https://aleph.im/) - [TwentySix](https://twentysix.cloud/), a decentralized cloud platform allowing you to deploy dapps, "serverless" functions, VM instances... So basically anything!

### Live deployment:

- [idld7ljksvvusy3i3pya4e4rawh4kpgdvdvqbbah6ykekd5bv6rq.aleph.sh](https://idld7ljksvvusy3i3pya4e4rawh4kpgdvdvqbbah6ykekd5bv6rq.aleph.sh)
- [aleph-dapp.binaryeyelabs.xyz](https://aleph-dapp.binaryeyelabs.xyz)

### Dapp Stack

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Wagmi](https://wagmi.sh/)
- [ConnectKit by Family](https://docs.family.co/connectkit)
- [React HashRouter](https://reactrouter.com/en/main/routers/create-hash-router)
- [FastAPI](https://fastapi.tiangolo.com/)
- [aleph-client](https://github.com/aleph-im/aleph-client/)
- [Libertai](https://libertai.io/)

### Requirements

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/)
- [python 3.9.x](https://www.python.org/downloads/release/python-3919/)

### Clone & install

```code
git clone https://github.com/philogicae/alephim-fullstack-dapp-example.git
pnpm install
pnpm run pip-install
```

### Development

```code
# Only frontend
pnpm run dev

# Test frontend + API
pnpm run build
pnpm run dev-api
```

### Deployment

```code
# Without pip dependencies
pnpm run build
pnpm run deploy

# With pip dependencies
pnpm run build
pnpm run pip-build
pnpm run pip-upload
pnpm run deploy-with-pip
```

### Add custom domain

```code
pnpm run set-domain
```
