import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
})
export class FaceSnapsService{

  faceSnaps: FaceSnap[] = [
    {
      id: 0,
      title: 'Archibald',
      description: 'My best friend',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'England'
    },

    {
      id: 1,
      title: 'Best meal',
      description: 'Very good meal',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      location: 'Brazil'
    },

    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Best place',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      location: 'Paris'
    }
  ]

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found');
    }else{
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
