### How to reproduce

```bash
pnpm install
docker compose up -d
docker compose logs -f world-deployer # wait for world to deploy
mprocs
```

```bash
# In a new tab in same dir once world is deployed
cd contracts
pnpm test:dev
```