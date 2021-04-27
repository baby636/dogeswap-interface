const CACHE_KEY = 'rebuy-record-cache';

export function getLocalCacheOfRebuyRecords() {
    const localCache = window.localStorage.getItem(CACHE_KEY)
    let parsedCache: any = [];
    if (localCache) {
      parsedCache = JSON.parse(localCache)
    }
    return parsedCache;
  }
  
export function setLocalCacheOfRebuyRecords(data: any) {
    if (data) {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify(data))
    }
}

