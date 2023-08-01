import request from './request'

const createFetcher = <T>(testData?: T, delayMilliSeconds?: number): (path: string) => Promise<T> => {
  const fetcher = async (path: string): Promise<T> => {
    if (testData != null) {
      await new Promise(f => setTimeout(f, delayMilliSeconds ?? 1000))
      console.log(`Waited ${delayMilliSeconds ?? 1000}ms`)
      return await Promise.resolve(testData)
    }
    return await request<T>(path)
  }
  return fetcher
}

export {
  createFetcher
}
