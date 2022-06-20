/* eslint-disable no-fallthrough */
import { PostgrestError } from '@supabase/supabase-js';

export function checkErrorInDB(error: PostgrestError | null) {
  if (error && !Array.isArray(error)) {
    switch (error?.code) {
      case '23505':
        if (error.details.includes('email')) {
          return true;
        }
      default:
        return false;
    }
  }

  return false;
}
