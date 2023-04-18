/**
 * @description Queue Node
 * @class QueueNode
 */
class QueueNode<T> {
  value?: T
  next: QueueNode<T> | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}
/**
 * @description FIFO Queue
 * @class QueueList
 */
class QueueList<T> {
  #header: QueueNode<T>
  #size: number

  constructor() {
    this.#header = new QueueNode<T>(null)
    this.#size = 0
  }

  #tail(): QueueNode<T> | null {
    let header = this.#header
    return header.next
  }

  #head(): QueueNode<T> | null {
    const tail = this.#tail()
    return tail ? tail.next : null
  }

  enqueue(item: T): void {
    const queueNode = new QueueNode(item)

    if (this.isEmpty()) {
      queueNode.next = this.#head()
      this.#tail()!.next = queueNode
    } else {
      queueNode.next = queueNode
    }

    this.#header.next = queueNode
    ++this.#size
  }

  dequeue(): boolean {
    if (this.isEmpty()) return false

    const headIndex = this.#head()

    if (this.size === 1) {
      this.#header.next = null
    } else {
      this.#tail()!.next = headIndex!.next
    }

    headIndex!.next = null
    --this.#size
    return true
  }

  get size(): number {
    return this.#size
  }

  isEmpty(): boolean {
    return this.#size === 0
  }

  first(): QueueNode<T> | null {
    if (this.isEmpty()) {
      return null
    }

    return this.#head()!.value!

  }

}

export { QueueList, QueueNode }
