import axios from 'axios'

export const listReceipts = async (): Promise<[]> => {
  try {
    console.info(`request listReceipts`)
    const response = await axios.get(
      `http://${process.env.BACKEND_API_SERVICE_HOST}:${process.env.BACKEND_API_SERVICE_PORT}/api/v1/receipts`
    )
    console.info(`listReceipts successful`)
    return response?.data
  } catch (error: unknown) {
    console.error('error during listReceipts request')
    if (axios.isAxiosError(error)) {
      console.error(error.message)
      console.error(JSON.stringify(error.toJSON))
    }
    return Promise.reject(error)
  }
}
