import brokers from "@/data/brokers.json"
import type { Broker } from "@/types/broker"

/* ----------------------------------
Get All Brokers
----------------------------------- */

export function getAllBrokers(): Broker[] {
  return brokers as Broker[]
}

/* ----------------------------------
Get Broker by Slug
----------------------------------- */

export function getBrokerBySlug(slug?: string): Broker | undefined {

  if (!slug) return undefined

  return (brokers as Broker[]).find(
    (broker) => broker.slug === slug
  )
}

/* ----------------------------------
Get Broker Comparison
----------------------------------- */

export function getBrokerComparison(slug?: string): {
  first?: Broker
  second?: Broker
} {

  /* Prevent build crash */

  if (!slug || !slug.includes("-vs-")) {
    return {}
  }

  const [brokerA, brokerB] = slug.split("-vs-")

  const first = (brokers as Broker[]).find(
    (broker) => broker.slug === brokerA
  )

  const second = (brokers as Broker[]).find(
    (broker) => broker.slug === brokerB
  )

  return { first, second }
}