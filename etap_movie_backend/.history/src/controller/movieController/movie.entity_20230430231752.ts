import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Movie {
  @PrimaryGeneratedColumn()
  public id!: number;

  public lang!: string;
}
