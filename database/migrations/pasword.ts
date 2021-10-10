import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
export default class User extends BaseSchema {
  public up() {
    this.schema.alterTable('user', () => {
      Database.raw('ALTER TABLE user MODIFY password varchar(255)')
    })
  }
}
