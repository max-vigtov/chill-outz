import 'package:chill_outz/features/home/presentation/screens/video_screen.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {

  final List<String> videoPaths = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4',
    'assets/videos/video3.mp4',
    'assets/videos/video4.mp4',
    'assets/videos/video5.mp4',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home Screen'),
      ),
        body: Center(
          child: Column(            
            children: [
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue, // Cambia el color a tu preferencia
                ),
                onPressed: (){
                    Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VideoPlayerScreen(videoPath: videoPaths[0]),
                    ),
                  );

                }, 
                child: const Text('Video 1')
              ),
              const SizedBox(height: 20,),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green, // Cambia el color a tu preferencia
                ),
                onPressed: (){
                    Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VideoPlayerScreen(videoPath: videoPaths[1]),
                    ),
                  );

                }, 
                child: const Text('Video 2')
              ),
              const SizedBox(height: 20,),              
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.purple, // Cambia el color a tu preferencia
                ),
                onPressed: (){
                    Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VideoPlayerScreen(videoPath: videoPaths[2]),
                    ),
                  );

                }, 
                child: const Text('Video 3')
              ),
              const SizedBox(height: 20,),              
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.teal, // Cambia el color a tu preferencia
                ),
                onPressed: (){
                    Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VideoPlayerScreen(videoPath: videoPaths[3]),
                    ),
                  );

                }, 
                child: const Text('Video 4')
              ),
              const SizedBox(height: 20,),              
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.indigoAccent, // Cambia el color a tu preferencia
                ),
                onPressed: (){
                    Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VideoPlayerScreen(videoPath: videoPaths[4]),
                    ),
                  );

                }, 
                child: const Text('Video 5')
              ),
            ],
          )
        ),
    );
  }
}