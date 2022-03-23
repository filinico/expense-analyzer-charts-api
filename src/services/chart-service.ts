import {listReceipts} from '../api/backend-api'

export const getReceiptsChart = async (): Promise<[]> => {
  return await listReceipts()
}
