export async function delay(ms: number = 1000) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  })
}