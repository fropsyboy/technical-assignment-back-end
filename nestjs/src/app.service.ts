import { Injectable } from '@nestjs/common';

// ! You'll need this when querying the database
import knexInstance from '../knex/knex';

// ! Left here for ease
export interface Venue {
  id: number;
  name: string;
  country_iso2: string;
  state: string;
  city: string;
}

@Injectable()
export class AppService {

  async getVenues(limit: number): Promise<Venue[]> {
    const venues = await knexInstance
      .select('*')
      .from('venues')
      .limit(limit);
    return venues;
  }
  
}
