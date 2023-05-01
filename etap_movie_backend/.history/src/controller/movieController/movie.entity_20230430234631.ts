import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public movie_name!: string;

  @CreateDateColumn({ type: 'timestamp' })
  public created_at!: string;
}
