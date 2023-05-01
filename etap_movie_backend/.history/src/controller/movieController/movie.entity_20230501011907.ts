import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public movie_name!: string;

  @Column({ type: 'varchar' default: 'horro' })
  public genre!: string;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: string;
}
