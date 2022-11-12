import type { LayoutServerLoad } from '../'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await getServerSession(event),
  }
}