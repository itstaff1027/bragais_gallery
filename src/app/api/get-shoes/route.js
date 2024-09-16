
//import { promises as fs } from 'fs';
//import path from 'path';
//
import { NextResponse } from 'next/server';
import shoes from '@/data/shoes-model.json';

export async function GET(request) {
  // Get the path to the JSON file
  //const jsonFilePath = path.join(process.cwd(), 'src', 'data', 'shoes-model.json'); 
  try {
    // Read the file content
    //const jsonData = await fs.readFile(jsonFilePath, 'utf-8');
    //
    // Parse the JSON data
    const data = shoes;

    console.log(data.shoes)
    // Return the data as a JSON response
    return NextResponse.json(data.shoes, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    // Handle error and return a 500 status with error message
    return NextResponse({ error: 'Failed to load data' }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(request){

  try {
    const data = shoes.shoes;
    const { type, sub_type } = await request.json();
    
    let filteredData = null;

    if(type === 'Pageant' || type === 'Heels'){
      if(sub_type === '5.5'){
        filteredData = data.filter(shoe => shoe.model === 'CELEST' || shoe.model === 'PAULINE')
      }
      else if(sub_type === '4'){
        filteredData = data.filter(shoe => shoe.heel_height === sub_type)
      }
      else {
        filteredData = data.filter(shoe => shoe.category.toLowerCase() === type.toLowerCase() && shoe.model != 'CELEST' && shoe.model != 'PAULINE' && shoe.heel_height != '4')
      }
    }
    else if(type === 'Mandiator' || type === 'Wondiator' || type === 'Sandals' || type === 'Accessory'){
      filteredData = data.filter(shoe => shoe.category.toLowerCase() === type.toLowerCase())
    }
    else{
      filteredData = data
    }

    //console.log(test) 
    //console.log(filteredData)
    
    return NextResponse.json(filteredData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    // Handle error and return a 500 status with error message
    return NextResponse({ error: 'Failed to load data' }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
