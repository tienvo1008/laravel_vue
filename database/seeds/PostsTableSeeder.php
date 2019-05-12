<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('posts')->insert([
            'title' => 'tran dau giua viet nam va indonesia',
            'body' => 'viet nam thang indonesia 1-0 voi cu duoc cua cong phuong'
        ]);
    }
}
