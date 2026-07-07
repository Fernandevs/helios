import type { ProjectEntity } from '@/features/projects/domain/entities/project.entity';
import type { ProjectsRepository } from '@/features/projects/domain/repositories/projects.repository';

const PROJECTS: ProjectEntity[] = [
  {
    id: '1',
    slug: 'nebula-cloud',
    title: 'Nebula-Cloud Infrastructure',
    tag: 'DISTRIBUTED SYSTEMS',
    accentColor: '#c0c1ff',
    featured: true,
    year: '2023',
    status: 'active',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLsHBvWz5qpPqOclEJXP-GvJdydso2DhV5Uys6GpHzHQJLj3Odb1mj59EchY53d6YPnRaJaiAJVvhz4KR9kWW2lw63hLwp0Xfg-3qNrJ58E5S-eKcrtt--9l_ov38lcaVt82A8rjhOgFsDGSkHqcGK3LirGg0fZyxK9f5ApRbgsrnZNMwOwC45ExEMo0MweiTxvkQsAsFGIZM-yFDrq015raIFrpQlRlOYN6JfuFnDROwr8YZMQOF6FuZA',
    tech: ['Go', 'Kubernetes', 'gRPC', 'etcd', 'Terraform', 'Prometheus'],
    description:
      'Redesigning the core backbone of a multi-region SaaS platform to achieve 99.999% availability under 2 TB/s sustained load.',
    longDescription:
      'Nebula-Cloud started as an emergency response to a critical availability crisis: a monolithic control plane that became the single point of failure for 300,000 concurrent users across three continents. The redesign introduced a federated control plane built on etcd clusters, with each region operating autonomously and reconciling state asynchronously through a custom CRD-based Kubernetes operator written in Go.\n\nThe traffic layer was rebuilt around gRPC with bidirectional streaming, replacing a REST API that serialized 140 MB payloads on hot paths. A weighted round-robin load balancer with real-time health scoring reduced cross-region failover time from 45 seconds to under 800 milliseconds. Circuit breakers were implemented at every service boundary with adaptive thresholds recalibrated every 30 seconds based on sliding-window error rates.\n\nInfrastructure provisioning moved entirely to Terraform with a layered module system. Prometheus and Grafana dashboards track 2,400 custom metrics in real time, with alerting pipelines that page on-call engineers with root-cause annotations generated automatically via log correlation.',
    highlights: [
      '99.999% uptime sustained across 12 AWS regions over 14 months',
      'Cross-region failover reduced from 45 s to under 800 ms',
      '2 TB/s peak load handled with p99 latency of 11 ms',
      'Cascading failure rate dropped 94% after circuit breaker rollout',
      '2,400 custom Prometheus metrics monitored in real time',
    ],
  },
  {
    id: '2',
    slug: 'signal-v2',
    title: 'Signal v2.0',
    tag: 'IOT / TELEMETRY',
    accentColor: '#4fdbc8',
    featured: true,
    year: '2023',
    status: 'active',
    tech: ['Rust', 'WebAssembly', 'MQTT', 'TimescaleDB', 'Apache Arrow'],
    description:
      'Real-time telemetry engine for IoT constellation tracking — 800 k events/sec with a 12 MB runtime footprint.',
    longDescription:
      'Signal v2.0 was built to replace a Python-based telemetry daemon that could not keep pace with a 40x growth in connected sensor nodes over 18 months. The new engine is written in Rust and compiled to WebAssembly for edge deployment, enabling the same binary to run on ARM microcontrollers, cloud VMs, and browser workers without recompilation.\n\nA custom binary protocol based on Apache Arrow IPC replaces JSON serialization, achieving 40% bandwidth reduction while maintaining schema-on-read flexibility for heterogeneous sensor payloads. The ingestion pipeline batches incoming events using a lock-free ring buffer and flushes to TimescaleDB hypertables in parallel write transactions, sustaining 800,000 events per second with a memory footprint under 12 MB.\n\nThe MQTT broker integration supports QoS levels 0, 1, and 2 with session persistence and offline buffering for intermittent connectivity. A built-in replay engine allows historical telemetry to be re-processed through updated analysis pipelines without re-ingesting raw data, reducing debugging cycles from hours to minutes.',
    highlights: [
      '800 k events/sec ingestion with a 12 MB memory footprint',
      '40% bandwidth reduction via custom Apache Arrow IPC protocol',
      'Single Rust/WASM binary runs on ARM MCUs, VMs, and browsers',
      '97% memory reduction compared to the previous Python implementation',
      'Replay engine enables pipeline updates without raw re-ingestion',
    ],
  },
  {
    id: '3',
    slug: 'quasar-ui',
    title: 'Quasar UI',
    tag: 'DESIGN SYSTEMS',
    accentColor: '#ddb7ff',
    featured: true,
    year: '2022',
    status: 'active',
    tech: ['React', 'TypeScript', 'Storybook', 'Vitest', 'Chromatic', 'CSS Houdini'],
    description:
      'A high-performance design system for engineering dashboards — 60 fps animations with zero runtime CSS-in-JS overhead.',
    longDescription:
      'Quasar UI was born from a shared pain point across six internal engineering teams: every dashboard project started by copy-pasting components from the last one, accumulating subtle behavioral divergences that multiplied QA effort with each release. The system provides a single source of truth for 80+ components organized around a three-tier token architecture — primitive, semantic, and component-level — allowing full theme swaps by changing fewer than 30 CSS variables.\n\nAnimations are driven by CSS Houdini worklets rather than JavaScript, keeping the main thread free and guaranteeing 60 fps even on dashboards rendering 10,000-row virtual tables. The component library is published as a monorepo with four tree-shakeable npm packages: core primitives, data visualization, form controls, and layout utilities. Bundle size for a typical dashboard using all four packages is 38 KB gzipped.\n\nThe development workflow integrates Storybook for interactive documentation, Vitest for unit and accessibility tests, and Chromatic for automated visual regression across 1,200 story variants. A custom Figma plugin syncs design tokens bidirectionally, ensuring designers and engineers always share identical values without manual handoff.',
    highlights: [
      '80+ components adopted across 6 engineering teams',
      '60 fps animations via CSS Houdini with zero JS on the main thread',
      '38 KB gzipped total bundle for a full-featured dashboard',
      '1,200 Chromatic story variants in automated visual regression',
      'Figma to code token sync eliminates manual design handoff',
    ],
  },
  {
    id: '4',
    slug: 'chronodb-layer',
    title: 'ChronoDB Layer',
    tag: 'DATABASE',
    accentColor: '#fb923c',
    featured: true,
    year: '2021',
    status: 'archived',
    tech: ['PostgreSQL', 'Redis', 'Python', 'Debezium', 'Kafka', 'Docker'],
    description:
      'Transparent caching abstraction that reduced query latency by 45% across 14 legacy PostgreSQL clusters with zero downtime.',
    longDescription:
      'ChronoDB Layer was designed to solve a deceptively hard problem: improving query performance on a fleet of 14 production PostgreSQL clusters without touching a single line of application code and without scheduling any maintenance windows. The solution is a transparent proxy that intercepts queries at the wire protocol level, routes cache-eligible reads to Redis, and writes back through an invalidation pipeline powered by Debezium CDC.\n\nCache invalidation is handled by capturing the PostgreSQL WAL via Debezium, publishing row-level change events to Kafka, and consuming them in a Python invalidation worker that computes the affected cache key set using a dependency graph built at query parse time. This guarantees strong consistency: a cached result is never stale by more than the Kafka end-to-end latency, which averaged 18 ms in production.\n\nA built-in query plan analyzer monitors EXPLAIN ANALYZE output for every distinct query fingerprint and emits index suggestions as structured JSON, fed into a weekly automated PR pipeline. Over six months, this generated 34 accepted index migrations, compounding the latency gains beyond the caching layer alone.',
    highlights: [
      '45% average query latency reduction across all 14 clusters',
      'Zero downtime deployment as a transparent wire-protocol proxy',
      'Strong consistency with 18 ms average cache invalidation via Kafka CDC',
      '34 automated index suggestions accepted over 6 months',
      'Cache hit rate reached 78% within 30 days of rollout',
    ],
  },
  {
    id: '5',
    slug: 'graviton-gateway',
    title: 'Graviton API Gateway',
    tag: 'INFRASTRUCTURE',
    accentColor: '#60a5fa',
    featured: true,
    year: '2024',
    status: 'active',
    tech: ['Go', 'GraphQL', 'Envoy', 'OpenTelemetry', 'Redis', 'WASM'],
    description:
      'High-throughput API gateway for 40 microservices — 2 M req/sec with ML-based adaptive circuit breakers and real-time observability.',
    longDescription:
      'Graviton was built to replace an aging NGINX-based gateway that could not support the routing complexity of a microservices mesh grown to 40 services. The new gateway is written in Go and runs as a sidecar alongside each service, forming a control-plane/data-plane split: a central Go binary handles routing configuration and policy distribution, while per-service Envoy proxies handle the actual packet forwarding.\n\nRate limiting is implemented at three granularities — global, per-route, and per-consumer — using a token bucket algorithm backed by Redis with Lua scripting for atomic operations. Adaptive circuit breakers use a lightweight gradient boosting model compiled to WebAssembly that recalibrates open/closed thresholds every 60 seconds, reducing false positives by 61% compared to static thresholds.\n\nAll service-to-service calls are instrumented with OpenTelemetry spans, propagated via W3C Trace Context headers, and exported to a Tempo backend. A real-time admin dashboard displays per-route p50/p95/p99 latencies, circuit breaker states, and rate limit consumption with a 2-second refresh interval, enabling on-call engineers to diagnose issues without SSH access.',
    highlights: [
      '2 M req/sec sustained across 40 microservices',
      '61% fewer circuit breaker false positives with ML adaptive thresholds',
      'Three-level rate limiting: global, per-route, and per-consumer',
      'Full distributed tracing via OpenTelemetry and W3C Trace Context',
      'Real-time admin dashboard with 2-second metric refresh',
    ],
  },
  {
    id: '6',
    slug: 'stellar-auth',
    title: 'Stellar Auth',
    tag: 'SECURITY',
    accentColor: '#34d399',
    featured: false,
    year: '2024',
    status: 'wip',
    tech: ['Rust', 'WebAuthn', 'ZK-SNARKs', 'Redis', 'JWT', 'PostgreSQL'],
    description:
      'Zero-knowledge passwordless authentication with hardware-bound session tokens and real-time anomaly detection.',
    longDescription:
      'Stellar Auth eliminates the password entirely — not just with OAuth delegation but at the cryptographic level. Authentication proofs are generated using Groth16 ZK-SNARKs: the client proves knowledge of a credential without revealing it, and the server verifies the proof in under 4 ms using a precomputed verification key. This makes credential interception or database leakage cryptographically useless.\n\nSession tokens are hardware-bound via WebAuthn Level 3 attestation. During registration, the authenticator generates a resident key pair; the private key never leaves the secure enclave. Sessions are managed in Redis with sliding expiration, device fingerprint binding, and geographic anomaly scoring — logins from unusual locations trigger a step-up challenge automatically.\n\nThe anomaly detection layer runs a streaming Isolation Forest model on login events, scoring each attempt against a feature vector that includes IP reputation, device entropy, time-of-day distribution, and behavioral biometrics. False positive rate in beta testing was 0.3% with a true positive rate of 97.4% on synthetic attack scenarios.',
    highlights: [
      'ZK-SNARK proof verification in under 4 ms using Groth16',
      'Private keys never leave hardware secure enclaves via WebAuthn L3',
      '97.4% true positive rate on anomaly detection with 0.3% FPR',
      'Hardware binding to YubiKey, Touch ID, and Android Strongbox',
      'Currently in closed beta with 3 design partner integrations',
    ],
  },
  {
    id: '7',
    slug: 'pulsar-stream',
    title: 'Pulsar Event Stream',
    tag: 'DATA ENGINEERING',
    accentColor: '#f472b6',
    featured: false,
    year: '2023',
    status: 'active',
    tech: ['Apache Pulsar', 'Apache Flink', 'Scala', 'ClickHouse', 'Kubernetes', 'Avro'],
    description:
      'Distributed event streaming at 5 M events/sec with exactly-once semantics, schema registry, and automated partition rebalancing.',
    longDescription:
      'Pulsar Event Stream was designed to unify five disparate Kafka clusters that had grown independently across business units, each with different schema conventions, retention policies, and access control models. The migration to Apache Pulsar enabled a multi-tenancy model where each unit gets isolated namespaces with independent quota enforcement while sharing the underlying broker infrastructure — reducing total cluster cost by 38%.\n\nReal-time processing pipelines are written in Scala with Apache Flink, using the Flink-Pulsar connector for source and sink. Exactly-once semantics are guaranteed end-to-end through Flink checkpoints coordinated with the Pulsar transaction API, tolerating broker restarts and consumer crashes without message duplication or loss. Backpressure propagation is automatic: when a downstream ClickHouse sink slows below a threshold, Flink reduces source parallelism and triggers horizontal pod autoscaling on the Kubernetes deployment.\n\nA central schema registry enforces Avro schema compatibility — backward, forward, and full — across all 240 active topics. Schema evolution is governed by a CI gate: any change that would break existing consumers blocks the deployment pipeline and notifies the owning team. This eliminated a class of silent data corruption bugs that previously required multi-day forensic investigations to detect.',
    highlights: [
      '5 M events/sec with guaranteed exactly-once semantics end-to-end',
      '38% infrastructure cost reduction through Pulsar multi-tenancy',
      '240 active topics governed by automated schema compatibility CI gate',
      'Backpressure-aware Flink pipelines with automatic HPA integration',
      'Unified 5 legacy Kafka clusters with zero data loss during migration',
    ],
  },
];

export const projectsRepositoryImpl: ProjectsRepository = {
  async getAll() { return PROJECTS; },
  async getFeatured() { return PROJECTS.filter((p) => p.featured); },
  async getBySlug(slug: string) { return PROJECTS.find((p) => p.slug === slug) ?? null; },
};
